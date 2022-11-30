import { Strategy, Student, Flask } from "phosphor-react";
import { Spreader } from "../../components/spreader";
import { Text } from "../../components/textComponent";
import { GetUserInfoQuery } from "../../graphql/generated";
import { format, isDate } from 'date-fns'
import { useEffect } from "react";
import { TypeInfo } from "graphql";

type AboutProps = {
  colorClass: string
  data?: GetUserInfoQuery;
  id: string;
};

type AboutType = {
  careerDescription?: string;
  education?: {
    name: string;
    institute: string;
    initialDate: Date;
    endDate?: Date;
  }[];
  experiences?: {
    companyDescription: string;
    companyName: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    technologies: {
      name: string;
    }[];
  }[];
};

export default function About(props: AboutProps) {

  const userBackground: AboutType = {
    careerDescription: props.data?.userProfile?.careerdescription,
    education: props.data?.educationDegrees,
    experiences: props.data?.experiences,
  };

  return (
    <div className="relative w-full h-full">
      <Spreader colorClass={props.colorClass} />
      <section
        id="about"
        className={`container flex flex-col gap-4 items-start relative max-w-[80%] w-full m-auto h-[110vh] py-6 `}
      >
        <Text variant="title" content="About" className="backdrop-blur-sm backdrop-brightness-95" />
        <div className="flex flex-col w-full items-baseline">
          <header className="flex items-center justify-center gap-4">
            <Strategy size={32} />
            <Text variant="subtitle" content="Background" />
          </header>
          <main className="w-full backdrop-blur-sm backdrop-brightness-95">
            <Text variant="bold" content={userBackground.careerDescription} />
          </main>
        </div>
        <div className="flex flex-col w-full items-baseline">
          <header className="flex items-center justify-center gap-4">
            <Student size={32} />
            <Text variant="subtitle" content="General Education" />
          </header>
          <main className="flex flex-col-reverse gap-4 w-full backdrop-blur-sm backdrop-brightness-95">
            <ul>
              {userBackground.education?.map((course) => {
                return (
                  <li key={course.name} className="flex gap-1">
                    ▪
                    <Text variant="bold" content={course.name} />
                    -
                    <Text variant="small" content={course.institute} />
                    (
                    <Text
                      variant="small"
                      content={format(new Date(course.initialDate), "MMMM/yyyy")}
                    />{" "}
                    -{" "}
                    <Text
                      variant="small"
                      content={format(new Date(course.endDate?.toString() || ""), "MMMM/yyyy")}
                    />
                    )
                  </li>
                );
              })}
            </ul>
          </main>
        </div>
        <div className="flex flex-col w-full items-baseline">
          <header className="flex items-center justify-center gap-4">
            <Flask size={32} />
            <Text variant="subtitle" content="IT Experience" />
          </header>
          <main className="flex flex-col-reverse gap-4 w-full backdrop-blur-sm backdrop-brightness-95">
            <ul>
              {userBackground.experiences?.map((experience) => {
                return (
                  <li key={experience.startDate.toString()} className="flex flex-col gap-1 ">
                    <header className="flex gap-1">
                      ▪
                      <Text variant="bold" content={experience.companyName} />
                      -
                      <Text
                        variant="small"
                        content={experience.companyDescription}
                      />
                    </header>
                    <main className="flex flex-col ml-12">
                      <div className="flex gap-1">
                        ▪ Position -
                        <Text variant="small" content={experience.position} />
                      </div>
                      <div className="flex gap-1">
                        ▪ Period -
                        <Text
                          variant="small"
                          content={format(new Date(experience.startDate.toString()), "MMMM/yyyy")}
                        />
                        -
                        <Text
                          variant="small"
                          content={
                            experience.endDate
                              ? format(new Date(experience.endDate?.toString() || ""), "MMMM/yyyy")
                              : "Current"
                          }
                        />
                      </div>
                      <div className="flex gap-1">
                        ▪ Technologies
                        {experience.technologies.map((technology) => {
                          return (
                            <Text
                              key={technology.name}
                              variant="small"
                              content={`- ${technology.name}`}
                            />
                          );
                        })}
                      </div>
                    </main>
                  </li>
                );
              })}
            </ul>
          </main>
        </div>
      </section>
    </div>
  );
}
