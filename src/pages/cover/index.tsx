import { Text } from "../../components/textComponent";
import userAvatar from '../../assets/userAvatar.png'
import { PageColorMenu } from "../../components/pageColorMenu";
import { Dispatch, SetStateAction } from "react";

type CoverProps = {
  userProfile: {
    name?: string;
    avatarURL?: string | null;
  },
  famousPhrase: {
    phrase?: string
    author?: string
  },
  pageColor: string
};

export default function Cover(props: CoverProps) {

  return (
    <section className="relative flex flex-col items-center justify-around max-w-[80%] w-full m-auto h-[100vh] z-10">
      <div className="flex items-center flex-col pt-[16vh]">
        <img
          src={props.userProfile.avatarURL || userAvatar}
          alt="user avatar"
          className="rounded-full w-44"
        />
        <Text variant="subtitle" content={props.userProfile?.name} />
      </div>
      <div className="italic flex flex-col items-center text-center">
        <Text variant="outlined" content={props.famousPhrase?.phrase}/>
        <Text content={props.famousPhrase?.author} />
      </div>
    </section>
  );
}