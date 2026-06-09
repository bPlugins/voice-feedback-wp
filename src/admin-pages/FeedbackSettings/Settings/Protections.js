import React from 'react';

const Protections = () => {
	return (
		<div>
			<h1>Protections</h1>
			{ /*
      'rate_limit_spam_protection' => [
        'enabled' => true, // Enable/disable rate limiting
        'max_submissions_per_hour' => 5, // Max submissions per user/IP per hour
        'max_submissions_per_day' => 20, // Max submissions per day
        'captcha' => true, // Enable CAPTCHA (reCAPTCHA or hCaptcha)
        'block_ip_after_limit' => true, // Block IP after exceeding limit
        'whitelisted_ips' => '', // Comma-separated IPs bypassing limits 
        'blacklisted_ips' => '', // Comma-separated IPs always blocked 
      ]
      */ }
		</div>
	);
};

export default Protections;
