import React from "react";
import { useTranslation } from "react-i18next";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import '../../styles/bootstrap.min.css'

export default ({ biography }) => {
  const { t, i18n } = useTranslation('biography');

  const events = biography.map((item, index) =>
    <TimelineItem
      key={index}
      dateText={item.date}
      style={{ color: '#e86971' }}
    >
      <p>{item.event[i18n.language]}</p>
    </TimelineItem>
  );

  return (
    <section className="container">
      <h3>{t('title')}</h3>
      <Timeline lineColor={'#ddd'}>
        {events}
      </Timeline>
    </section>
  );
}
