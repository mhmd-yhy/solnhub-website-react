import React from "react";

export default function MyMap() {
  return (
    <div className="map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.2249340846884!2d28.655190109220374!3d41.01541278245596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55fc62e4e6059%3A0xe5dfc942c34e29b!2zRXNlbnl1cnQgS8SxeiDDlsSfcmVuY2kgWXVyZHU!5e0!3m2!1str!2str!4v1723582025848!5m2!1str!2str"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
