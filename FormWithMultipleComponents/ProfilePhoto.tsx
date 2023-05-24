import Props from "./Register";

export const ProfilePhoto = ({ register }: Props) => {
  return (
    <div>
      <h3>
        <strong>Add Profile Photo</strong>
      </h3>
      <p>
        Note: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        amet, tenetur distinctio ipsam harum omnis.
      </p>

      <input
        {...register("agreement")}
        type="checkbox"
        id="agreement"
        name="agreement"
      />
      <label htmlFor="agreement">
        I agree to the <a href="www.google.com">Terms & Conditions</a>
      </label>

      <input
        {...register("image")}
        type="image"
        id="image"
        alt="image"
        src="https://picsum.photos/100/100"
      ></input>

      <label htmlFor="photo">Accepted file formats: JPG, PNG, BMP</label>
      <input {...register("photo")} type="file" id="photo" name="photo" />

      <span>Max file size 1MB</span>
    </div>
  );
};
