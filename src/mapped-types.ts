interface Student {
  id: number;
  name: string;
}

type MappedType = {
  [Key in keyof Student]: boolean;
};

// type MappedType = {
//   id: boolean;
//   name: boolean;
// }

type Student2 = Student[keyof Student];

// type Student2 = number | string;

type Student3 = {
  id: Student['id'];
};

// type Student3 = {
//   id: number
// };

type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

// type FeatureOptions = {
//   darkMode: boolean;
//   newUserProfile: boolean;
// };
