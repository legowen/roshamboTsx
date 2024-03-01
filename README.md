# Rock Paper Scissors Game 👊✌️🖐️

This is a project of Rock Paper Scissors game made using JavaScript, TypeScript, React, and CSS.<br>
In this game, users can select one of the items among rock, paper, and scissors, and the computer randomly chooses one item to compete.<br>
The result can be Win, Lose, or Tie, and if the result is Win, the user can earn 1 point.<br>
Users can reset the score anytime using the Reset button.

<br>
1. Figma (Design Tool) Usage

- Layout and design creation.

<br>
2. JavaScript Usage

- When the user selects an item through buttons, the item is passed as a function parameter.
- When the user selects a button, the computer also randomly selects an item.
- Compare the items selected by the user and the computer to determine the winner.
- Determine the winner between the user and the computer, create a score object, reflect it in local storage, and retrieve it.

<br>
3. TypeScript Usage

- Add image extension in @types/global/index.d.ts file to import images
- Define item types in src/model/item.ts using type aliases and index signature syntax and import them
- Define types for variables, objects, and functions, and fix syntax errors
- Determine the initial value of useState Hook provided by React and infer types, then reflect additional types and initial types using generic syntax
- Resolve local storage string | null type error by using type assertion syntax to get only the string type: JSON.parse(localStorage.getItem("score") as string)
- Define Props type for each component using Interface syntax and set types (setState type, union type, etc.)

<br>
4. React Usage

- Design components for better management and reusability.
- If the values ​​of useState Hooks provided by React are similar, create an object to simplify the code.
- Pass item, win status, and score value to state using useState's setState.
- Render item, win status, and score value using Props passed to state.
- Use ternary operator to reflect score object with 0 value in local storage when there is no value and reflect the score value stored in local storage when there is a value.

  <br>
5. Style Usage

- Design using CSS and perform responsive design
<br><br>
## Preview of Completed Project  

Demo : https://airoshambo.netlify.app/

## Tech Stack

- Build the site using ![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=for-the-badge&logo=javascript&logoColor=000000&labelColor=%23FDF1C&color=%23FFCE5A), ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=FFF&labelColor=3178C6&color=3178C6), and ![React](https://img.shields.io/badge/-React-222222?style=for-the-badge&logo=react).
- Manage ![CSS3](https://img.shields.io/badge/-CSS3-007ACC?style=for-the-badge&logo=css3) for styling
- Manage files using ![Git](https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=ffffff) and ![Github](https://img.shields.io/badge/-github-121013?style=for-the-badge&logo=github&logoColor=white).
- Package code, files, images, CSS files, etc., using build

## Running and Finishing the Project

- Install React TypeScript. `npx create-react-app my-app --template typescript`
- Create files for deployment environment. `npm run build`
- Create a static file serving program. `npm install -g serve (accessible in all paths on the current computer)`
- Serve the web application based on the build folder. `serve -s build`

## Project Reference Sites

1. TypeScript file import </br>
   https://velog.io/@nsunny0908/TIL-46-Typescript-image-import
2. TypeScript local storage string | null error </br>
   https://stackoverflow.com/questions/54715260/typescript-json-parse-error-type-null-is-not-assignable-to-type-string
3. TypeScript Props type narrowing 1 </br>
   https://ahnheejong.gitbook.io/ts-for-jsdev/06-type-system-deepdive/type-narrowing
4. TypeScript Props type narrowing 2 </br>
   https://www.yongdam.sh/blog/effective-typescript-narrowing
5. TypeScript Props setState type definition </br>
   https://til.b41.kr/posts/TIL-react-setState-type-220715/
6. Where is the best place to manage public or src React image files? </br>
   https://velog.io/@rimo09/React-Create-react-app-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EB%A1%9C%EB%A5%BC-%EC%84%A4%EC%A0%95%ED%95%98%EB%8A%94-4%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95
7. TypeScript instructor's Q&A 1 </br>
   https://www.inflearn.com/questions/1117907/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A7%8C%EB%93%A4%EB%A9%B4%EC%84%9C-%EA%B6%81%EA%B8%88%ED%95%9C-%EC%82%AC%ED%95%AD%EC%9D%B4-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8C%8C%EC%9D%BC-import-%ED%83%80%EC%9E%85-%EC%B6%94%EB%A1%A0-%EC%96%B4%EB%94%94%EA%B9%8C%EC%A7%80
8. TypeScript instructor's Q&A 2 </br>
   https://www.inflearn.com/questions/1119493/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A1%9C%EC%BB%AC%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%82%AC%EC%9A%A9-%EC%A7%88%EB%AC%B8

## Lessons Learned from the Project

### JavaScript

1. Random selection of computer items

```
  // Start selecting computer items
  const computerPlayStart = (): string => {
    // Array of item keys
    let itemKey: string[] = Object.keys(item);

    // Generate a random number between 1 and 2
    let randomNumber: number = Math.floor(Math.random() * itemKey.length);

    return itemKey[randomNumber];
  };
```

2. Determining user's victory

```
  //  Determine user's victory
  const userJudgement = (
    userSelect: ItemValue,
    computerSelect: ItemValue
  ): string => {
    let userJudgement = "";

    if (userSelect.name === computerSelect.name) {
      userJudgement = "Tie";
    } else if (userSelect.name === "바위")
      userJudgement = computerSelect.name === "가위" ? "Win" : "Lose";
    else if (userSelect.name === "가위")
      userJudgement = computerSelect.name === "보" ? "Win" : "Lose";
    else if (userSelect.name === "보")
      userJudgement = computerSelect.name === "바위" ? "Win" : "Lose";

    return userJudgement;
  };
```

### TypeScript

1. Image source extension syntax error

```
  // When path error occurs
  import Rock from "../src/image/rock.png"
  import Scissors from "../src/image/scissors.png"
  import Paper from "../src/image/paper.png"

  // Add extension in @types/global/index.d.ts in the top-level folder
  declare module '*.png';
  declare module '*.svg';
  declare module '*.gif';

  // Add options in compilerOptions in tsconfig.json folder
  "typeRoots": ["./node_modules/@types", "@types"]
```

2. Set useState generic type

```
  // select Item
  const [selectItem, setSelectItem] = useState<
    | { userItem: ItemValue; computerItem: ItemValue }
    | { userItem: null; computerItem: null }
  >({
    userItem: null,
    computerItem: null,
  });
```

3. Resolve local storage string | null error

```
  // Score
  const [score, setScore] = useState<{
    userScore: number;
    computerScore: number;
  }>(
    !JSON.parse(localStorage.getItem("score") as string)
      ? {
          userScore: 0,
          computerScore: 0,
        }
      : JSON.parse(localStorage.getItem("score") as string)
  );
```

4. Set Props type and narrow null type

```
  interface Props {
    title: string;
    selectItem: ItemValue | null;
    result: string | null;
  }

  const Main = (props: Props) => {
    return (
      <div>
        <h2>{props.title}</h2>
        {props.selectItem ? <img src={props.selectItem.src} alt={props.selectItem.alt} /> : null}
        {props.result ? <p className={props.result}>{props.result}</p> : null}
      </div>
    );
  };
```

5. Set Props setState type

```
  interface Props {
    score: { userScore: number; computerScore: number };
    setScore: React.Dispatch<
      React.SetStateAction<{ userScore: number; computerScore: number }>
    >;
  }
```

### React

1. Manage image source in src folder

```
  // image src
  import Rock from "../src/img/rock.png"
  import Scissors from "../src/img/scissors.png"
  import Paper from "../src/img/paper.png"
```

2. Objectification of useState similar State values

```
  // select Item
  const [selectItem, setSelectItem] = useState<
    | { userItem: ItemValue; computerItem: ItemValue }
    | { userItem: null; computerItem: null }
  >({
    userItem: null,
    computerItem: null,
  });
```

## What I got from this project

I attended a TypeScript course for three weeks to use TypeScript for the first time, and it was quite challenging and time-consuming to apply theory to React. I spent a lot of time understanding and applying TypeScript concepts such as image folder path issues, State Hook's generic types, local storage string | null type errors, narrowing null types in Props type, setting setState types in Props type, and objectification of useState in React. However, it was a valuable time because I learned a lot. Currently, I tend to put types everywhere to get used to them, but I hope to develop skills to use types only where needed by effectively using type inference in the future.
