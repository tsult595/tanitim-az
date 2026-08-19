'use client'



const Map = () => {
  // Параметры &ll=40.360,49.840&z=13 заставляют карту открываться сразу чистой без боковой панели
  const mapUrl = "https://www.google.com/maps/d/embed?mid=1wxCkZ7vpcX0qaOA0g6KNy-vkgGsWFzE&ehbc=2E312F&ll=40.360,49.840&z=13";

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {/* Сдвиг -mt-[64px] полностью срезает верхнюю плашку */}
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[calc(100%+64px)] -mt-[67px] rounded-2xl"
      />
    </div>
  );
};

export default Map;