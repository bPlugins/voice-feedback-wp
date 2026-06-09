import { useState, useRef, useEffect, useCallback } from "react";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js/dist/plugins/record.esm.js";

import "../../style.scss";
import toast, { Toaster } from "react-hot-toast";
import WithoutDrawer from "./WithoutDrawer";
import GlobalVoiceFeedback from "./GlobalVoiceFeedback";

const VoiceRecorder = ({ attributes, id }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [shouldInitRecording, setShouldInitRecording] = useState(false);
  const [isRecordingUIReady, setIsRecordingUIReady] = useState(false);

  const { buttons, voiceFeedback } = attributes;

  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const waveSurferRef = useRef(null);
  const waveSurferPlaybackRef = useRef(null);
  const audioRef = useRef(new Audio());
  const audioBlobRef = useRef(null);
  const audioURLRef = useRef(null);

  const resetPlaybackWaveform = useCallback(() => {
    if (waveSurferPlaybackRef.current) {
      waveSurferPlaybackRef.current.destroy();
      waveSurferPlaybackRef.current = null;
    }

    waveSurferPlaybackRef.current = WaveSurfer.create({
      container: `#${id} .waveform-playback`,
      waveColor: "#ccc",
      progressColor: buttons.normal.bgColor,
      height: 60,
      responsive: true,
      backend: "MediaElement",
    });
  }, [buttons.normal.bgColor, id]);

  const startRecording = useCallback(
    async () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setHasRecording(false);
      setIsRecordingUIReady(true);
      setShouldInitRecording(true);
    },
    []
  );

  const stopRecording = useCallback(
    () => {
      if (recorderRef.current?.isRecording()) {
        recorderRef.current.stopRecording();
      }
    },
    []
  );

  const handlePlay = useCallback(() => {
    if (!isPlaying) {
      audioRef.current.play();
      waveSurferPlaybackRef.current?.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      waveSurferPlaybackRef.current?.pause();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleClear = useCallback(() => {
    if (audioURLRef.current) {
      URL.revokeObjectURL(audioURLRef.current);
    }
    audioBlobRef.current = null;
    recorderRef.current = null;
    audioRef.current.src = "";
    if (waveSurferRef.current) {
      waveSurferRef.current.destroy();
      waveSurferRef.current = null;
    }
    if (waveSurferPlaybackRef.current) {
      waveSurferPlaybackRef.current.destroy();
      waveSurferPlaybackRef.current = null;
    }

    setIsPlaying(false);
    setHasRecording(false);
    setIsRecordingUIReady(false);
  }, []);

  const [showEmailGate, setShowEmailGate] = useState(false);

  const handleSend = useCallback(async (userName = '', userEmail = '') => {
    let blobToSend = null;
    let fileName = "";

    if (!audioBlobRef.current) {
      alert("No audio to send");
      return;
    }
    blobToSend = audioBlobRef.current;
    fileName = `voice-${Date.now()}.webm`;

    setIsSending(true);
    const sendButton = document.querySelector(`#${id} .sendBtn`);
    const originalText = sendButton?.textContent;
    if (sendButton) {
      sendButton.disabled = true;
      sendButton.textContent = "Sending...";
    }

    try {
      const file = new File([blobToSend], fileName, { type: blobToSend.type });
      const formData = new FormData();
      formData.append("action", "save_audio");
      formData.append("audio", file);
      formData.append("nonce", window.voiceRecorder?.nonce);
      formData.append("sourcePage", window.voiceRecorder?.source_page);
      formData.append("sourceUrl", window.voiceRecorder?.source_url);
      if (userName) {
        formData.append("userName", userName);
      }
      if (userEmail) {
        formData.append("userEmail", userEmail);
      }

      await fetch(window.voiceRecorder?.ajaxUrl, {
        method: "POST",
        body: formData,
      });

      if (sendButton) sendButton.textContent = "✅ Sent";
      toast.success("Successfully Sent!");
      handleClear();
    } catch (error) {
      toast.error("Failed to send!");
      if (sendButton) sendButton.textContent = originalText;
    } finally {
      setTimeout(() => {
        if (sendButton) {
          sendButton.textContent = originalText;
          sendButton.disabled = false;
        }
        setIsSending(false);
      }, 2000);
    }
  }, [handleClear, id]);

  const handleSendClick = useCallback(() => {
    const isEmailGateActive = window.voiceRecorder?.ask_name_email;
    if (isEmailGateActive) {
      setShowEmailGate(true);
    } else {
      handleSend();
    }
  }, [handleSend]);

  const handleEmailGateSubmit = useCallback(async (name, email) => {
    await handleSend(name, email);
    setShowEmailGate(false);
  }, [handleSend]);

  useEffect(() => {
    if (hasRecording && audioURLRef.current) {
      const container = document.querySelector(`#${id} .waveform-playback`);
      if (!container) return;

      resetPlaybackWaveform();
      waveSurferPlaybackRef.current.load(audioURLRef.current);
    }
  }, [hasRecording, resetPlaybackWaveform, id]);

  useEffect(() => {
    if (!shouldInitRecording) return;

    const container = document.querySelector(`#${id} .waveform-record`);
    if (!container) return;

    const initRecording = async () => {
      try {
        if (waveSurferRef.current) {
          waveSurferRef.current.destroy();
          waveSurferRef.current = null;
        }

        waveSurferRef.current = WaveSurfer.create({
          container: `#${id} .waveform-record`,
          waveColor: buttons.normal.bgColor,
          progressColor: buttons.normal.bgColor,
          height: 60,
          responsive: true,
        });

        const record = waveSurferRef.current.registerPlugin(
          RecordPlugin.create({
            renderRecordedAudio: false,
            scrollingWaveform: true,
            continuousWaveform: false,
          })
        );

        recorderRef.current = record;

        record.on("record-end", (blob) => {
          const audioURL = URL.createObjectURL(blob);
          audioRef.current.src = audioURL;
          audioBlobRef.current = blob;
          audioURLRef.current = audioURL;

          setHasRecording(true);
          setIsRecording(false);
        });

        await record.startRecording();
        setIsRecording(true);
      } catch (err) {
        toast.error("Couldn't start Recording!");
        setIsRecordingUIReady(false);
      } finally {
        setShouldInitRecording(false);
      }
    };

    initRecording();
  }, [shouldInitRecording, buttons.normal.bgColor, id]);

  useEffect(() => {
    const handleAudioEnd = () => {
      setIsPlaying(false);
      waveSurferPlaybackRef.current?.stop();
    };

    audioRef.current.addEventListener("ended", handleAudioEnd);
    return () => audioRef.current.removeEventListener("ended", handleAudioEnd);
  }, []);

  useEffect(() => {
    return () => {
      if (waveSurferRef.current) waveSurferRef.current.destroy();
      if (waveSurferPlaybackRef.current)
        waveSurferPlaybackRef.current.destroy();
      if (streamRef.current)
        streamRef.current.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      {voiceFeedback?.applyGlobally ? (
        <GlobalVoiceFeedback
          attributes={attributes}
          isRecording={isRecording}
          isRecordingUIReady={isRecordingUIReady}
          hasRecording={hasRecording}
          isPlaying={isPlaying}
          isSending={isSending}
          startRecording={startRecording}
          stopRecording={stopRecording}
          handlePlay={handlePlay}
          handleClear={handleClear}
          handleSend={handleSendClick}
          showEmailGate={showEmailGate}
          setShowEmailGate={setShowEmailGate}
          handleEmailGateSubmit={handleEmailGateSubmit}
        />
      ) : (
        <WithoutDrawer
          attributes={attributes}
          isRecording={isRecording}
          isRecordingUIReady={isRecordingUIReady}
          hasRecording={hasRecording}
          isPlaying={isPlaying}
          isSending={isSending}
          startRecording={startRecording}
          stopRecording={stopRecording}
          handlePlay={handlePlay}
          handleClear={handleClear}
          handleSend={handleSendClick}
          showEmailGate={showEmailGate}
          setShowEmailGate={setShowEmailGate}
          handleEmailGateSubmit={handleEmailGateSubmit}
        />
      )}
    </>
  );
};

export default VoiceRecorder;