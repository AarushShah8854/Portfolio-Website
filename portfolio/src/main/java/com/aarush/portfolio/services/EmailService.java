package com.aarush.portfolio.services;

import com.aarush.portfolio.dto.EmailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(EmailRequest emailRequest) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo("prepguide12@gmail.com");
        mailMessage.setFrom("aarushshah8854@gmail.com");
        mailMessage.setSubject("Portfolio Website Message from " + emailRequest.getFirstName() + " " + emailRequest.getLastName());
        mailMessage.setText(emailRequest.getMessage());
        mailMessage.setReplyTo(emailRequest.getEmailId());
        this.mailSender.send(mailMessage);
    }
}
