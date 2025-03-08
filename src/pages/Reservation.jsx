import ReservationForm from "../components/ReservationForm";

const Reservation = () => {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Make a Reservation</h1>
        <ReservationForm />
      </section>
    );
  };
  
  export default Reservation;