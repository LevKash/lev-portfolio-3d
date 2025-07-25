// src/types/config.ts

// тип для одной карточки Education
export type TEducationItem = {
  logo: string;
  title: string;
  subtitle: string;
  date: string;
};

export type TSection = {
  p: string;
  h2: string;
  content?: string;
};

export type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    p: string;
    h2: string;
    form: {
      name: { span: string; placeholder: string };
      email: { span: string; placeholder: string };
      message: { span: string; placeholder: string };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    education: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
  educationList: TEducationItem[];
};
