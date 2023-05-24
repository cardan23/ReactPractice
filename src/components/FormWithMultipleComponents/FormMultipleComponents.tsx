import { useForm, FieldValues } from "react-hook-form";
import { ProfileAndContactInfo } from "./ProfileAndContactInfo";
import { ContactInformation } from "./ContactInformation";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { ProfilePhoto } from "./ProfilePhoto";

export const FormMultipleComponents = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  //   return <form onSubmit={handleSubmit(onSubmit)}></form>;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProfileAndContactInfo />
        <ContactInformation register={register} />
        <SocialMediaLinks register={register} />
        <ProfilePhoto register={register} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
