export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninja = ({ ninjas }) => {
  return (
    <div>
      <h1>Welcome to Ninja House </h1>

      {ninjas.map((ninja) => {
        return (
          <div key={ninja.id} className="division">
            <h3>Name:{ninja.name}</h3>
            <h3>Phone number:{ninja.phone}</h3>
            <h3>Email address:{ninja.email}</h3>
            <h3>Street:{ninja.address.street}</h3>
            <h3>City:{ninja.address.city}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Ninja;
