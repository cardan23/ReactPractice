import Props from "./Register";

export const SocialMediaLinks = ({ register }: Props) => {
  return (
    <div>
      <h3>
        <strong>Social Media Links</strong>
      </h3>
      <label htmlFor="facebook">https://www.facebook.com</label>
      <input
        {...register("facebook")}
        type="text"
        name="facebook"
        id="facebook"
        placeholder="facebook"
      />

      <label htmlFor="twitter">https://www.twitter.com</label>
      <input
        {...register("twitter")}
        type="text"
        name="twitter"
        id="twitter"
        placeholder="twitter"
      />

      <label htmlFor="instagram">https://www.instagram.com</label>
      <input
        {...register("instagram")}
        type="text"
        name="instagram"
        id="instagram"
        placeholder="instagram"
      />
    </div>
  );
};
