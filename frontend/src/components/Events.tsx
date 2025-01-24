const Events = ({ events }: { events: Record<string, string>[] }) => {
  return (
    <ul>
      {events.map((event) => (
        <li key={event.name}>{event.name}</li>
      ))}
    </ul>
  );
};

export default Events;
