import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = (data) => {
        emailjs.send(
            'service_ehtzjbk', // Replace with your EmailJS service ID
            'template_382sntc', // Replace with your EmailJS template ID
            {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            },
            'nuj9sW0DbylocH4I_' // Replace with your EmailJS user ID
        )
        .then((result) => {
            console.log('Email sent:', result.text);
            alert("Message sent successfully!");
        })
        .catch((error) => {
            console.error('Error:', error.text);
            alert("Failed to send message.");
        });
    };

    return (
        <div className="contact-page">
            <header className="contact-header">
                <h1>{t('contact.title')}</h1>
                <p>{t('contact.subtitle')}</p>
            </header>

            <div className="contact-content">
                {/* Contact Form */}
                <div className="contact-form">
                    <h2>{t('contact.formTitle')}</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name">{t('contact.form.name')}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={t('contact.form.namePlaceholder')}
                                {...register("name", { required: t('contact.form.name') + " is required" })}
                            />
                            {errors.name && <p className="error-message">{errors.name.message}</p>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">{t('contact.form.email')}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder={t('contact.form.emailPlaceholder')}
                                {...register("email", { 
                                    required: t('contact.form.email') + " is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <p className="error-message">{errors.email.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">{t('contact.form.subject')}</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder={t('contact.form.subjectPlaceholder')}
                                {...register("subject", { required: t('contact.form.subject') + " is required" })}
                            />
                            {errors.subject && <p className="error-message">{errors.subject.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">{t('contact.form.message')}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder={t('contact.form.messagePlaceholder')}
                                {...register("message", { required: t('contact.form.message') + " is required" })}
                            ></textarea>
                            {errors.message && <p className="error-message">{errors.message.message}</p>}
                        </div>

                        <button type="submit" className="btn-submit">{t('contact.form.submit')}</button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="contact-info">
                    <h2>{t('contact.infoTitle')}</h2>
                    <ul>
                        <li>
                            <i className="fas fa-envelope"></i> 
                            <a href="mailto:your.email@example.com">{t('contact.info.email')}</a>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i> {t('contact.info.phone')}
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i> {t('contact.info.address')}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
