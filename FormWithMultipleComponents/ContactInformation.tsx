import Props from "./Register";

export const ContactInformation = ({ register }: Props) => {
  return (
    <div>
      <h3>
        <strong>Contact Information</strong>
      </h3>
      <label htmlFor="name">your Name/Business Name</label>
      <input
        {...register("name")}
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />

      <label htmlFor="phone">Phone number</label>
      <input
        {...register("phone")}
        type="tel"
        name="phone"
        id="phone"
        placeholder="33344455"
      />

      <label htmlFor="email">Email Address</label>
      <input
        {...register("email")}
        type="email"
        name="email"
        id="email"
        placeholder="email@email.com"
      />
    </div>
  );
};
