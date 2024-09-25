import React from 'react';
import Image from 'next/image';
import AboutMeta from '../../src/app/images/about-meta.png';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <section className='about-us'>
      <div className='our-mission'>
        <div className='content'>
          <h1 className='title'>
            Our <span className='title-span'>Mission</span>
          </h1>
          <p className='subtitle'>
            Read about Vosita&apos;s story and mission.
          </p>
          <p className='body'>
            Our mission is to empower physicians with innovative technology and
            solutions that improve quality of life, reduce the cost of
            healthcare, deliver superior patient care, and provide employees
            with meaningful work and growth opportunities.
          </p>
          <iframe
            width='640'
            height='360'
            src='https://www.youtube.com/embed/XILWWOn2JP4?si=NcLfePVqdnqd1Ln6'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className='why-vosita'>
        <Image src={AboutMeta} width={416} height={346} alt='' />
        <div className='sidebar'>
          <h1 className='title'>
            Why <span className='title-span'>Vosita?</span>
          </h1>
          <p className='subtitle'>
            Vosita allows patients to find a provider based on specialty,
            insurance network, location, reviews, or the language they speak.
            Patients can book a video visit aka telehealth, telemedicine, or
            virtual visit, or they can book a regular in-office appointment.
          </p>
          <a data-type='tel' className='telephone' href='tel:201-903-7000'>
            Call us at (201) 903-7000
          </a>
        </div>
      </div>
      <div className='our-story'>
        <h1 className='title'>Our Story</h1>
        <p>
          <span>
            Working in the healthcare technology space for decades has given
            Vosita CEO Robert Gabriel the unique opportunity to look at
            healthcare from many angles. In that time, he has worked and built
            relationships with many private physicians, pinpointing and
            understanding the daily challenges physicians face. His entire
            career has been devoted to helping physicians stay independent, be
            more profitable, and overcome industry challenges. As a business
            owner and father of three, Robert felt the need to address the
            challenges around making an appointment and rethink the way in which
            we do it. A flexible solution was needed, that would allow anyone to
            search and book an appointment from the convenience of their mobile
            device or desktop computer, the way we buy movie or concert tickets.
            His &apos;aha&apos; moment was inspired by his own personal needs
            and challenges when it came to managing loved ones&apos; medical
            appointments. With this purpose in mind, Robert founded Vosita.
          </span>
          <br />
          <br />
          <span>
            In 2020 during the start of the COVID-19 pandemic, Robert saw an
            opportunity to help the community and offered Vosita&apos;s
            telemedicine features for free so that patients could continue to
            seek medical care from the convenience and safety of their homes.
            With hard work and determination, we have succeeded in helping our
            community and healthcare professionals across the US. The pandemic
            challenged everyone in ways that no one was prepared for, but it
            also created new opportunities for innovation. A patient can wake up
            in the middle of the night and find a doctor’s availability -
            without waiting for the office staff to answer the phone during
            business hours or worrying about whether or not this provider
            accepts their insurance.
          </span>
          <br />
          <br />
          <span>
            As a patient-centered company, Vosita focuses on helping independent
            physicians stay independent by creating affordable tools and
            features to connect providers with patients conveniently. We
            understand the importance of staying up-to-date with the latest
            technological advances and changes in the healthcare field.
            We&apos;re a healthcare company that truly puts people at the heart
            of everything we do. We are dedicated and committed to serving,
            growing, and lasting in the field as we help you to do the same.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
