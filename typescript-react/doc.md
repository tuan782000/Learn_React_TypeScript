# React with TypeScript

## TypeScript React Props

Học về props trong TypeScript.

Tạo ra 2 thành phần PostList và PostCard

tsx -> trộn cả cú pháp TypeScript và HTML vào dùng chung.

Ban đầu:

PostList.tsx
```TSX
import React from 'react';

const PostList = async () => {
    return <div className="postList">PostList</div>;
}

export default PostList;
```

PostCard.tsx
```TSX
import React from 'react';

const PostCard = async () => {
    return <div className="postCard">PostCard</div>;
}

export default PostCard;
```

PostList thành phần cha truyền props sang PostCard là thành phần con.

---

Đã truyền

PostList.tsx
```TSX
import React from 'react';
import PostCard from '../postCard/PostCard';

const PostList = async () => {
    return (
        <div className="postList">
            <PostCard title="Post Title" body="Post Desc" />
        </div>;
    )
}

export default PostList;
```

Này truyền dữ liệu từ Cha xuống Con.

PostCard.tsx
```TSX
import React from 'react';

const PostCard = async (props: {title: string; body: string}) => {
    return (
        <div className="postCard">
            <p>{props.title}</p>
            <p>{props.body}</p>
        </div>
    );
}

export default PostCard;
```

Mình thấy được props đóng vai trò là 1 đối tượng. Đối tượng này được truyền vào trong hàm, các thuộc tính được khai báo type đầy đủ.

---



PostList.tsx
```TSX
import React from 'react';
import PostCard from '../postCard/PostCard';

// Hàm này thực hiện gọi APIs
async function getData() {
  // việc gọi api thì sẽ mất thời gian, nên dùng async/await để xử lý bất động bộ trong thời gian chờ dữ liệu trả về   
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  // Kiểm tra kết quả res trả về có tồn tại hay không.
  // Nếu không tồn tại thì ném ra lỗi. và ngưng thực hiện các dòng lệnh tiếp theo.
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // res mà thành công thì bỏ qua if nó chạy return này;
  return res.json();

  // JSON này trả về 1 mảng chưa các đối tượng, bên trong đối tượng có các cặp thuộc tính và giá trị.
  // thuộc tính bao gồm userId, id, title, body. 
}

const PostList = async () => {
    // sau khi có kết quả trả về nằm trong hàm, việc chúng ta gọi hàm đó để lấy ra mãng đó

    const data = await getData(); // gọi hàm nạp dữ liệu vào data
           
           {/* <PostCard title="Post Title" desc="Post Desc" />*/}

           {/* Ta có dữ liệu dùng hàm map*/}
           
           {/* "map": một kiểu dữ liệu bất biến dùng để lưu trữ một tập hợp các cặp key-value. */}
           
           {/* "..." toán tử spread được sử dụng để sao chép các phần tử từ một đối tượng hoặc mảng sang một đối tượng hoặc mảng khác.*/}

           {/* Đã in ra danh sách không được thiếu index hoặc là id của từng post */}

           {/* nếu bạn để post không thì sẽ báo lỗi, phải nên cung cấp type cho post*/}

    return (
        <div className="postList">
           {data.map((post: { id: number; title: string; body: string }) => (
                <PostCard key = {post.id} {...post}>
           ))}

        </div>
    );
}

export default PostList;
```

PostCard.tsx
```TSX
import React from 'react';

const PostCard = async (props: {title: string; body: string}) => {
    return (
        <div className="postCard">
            <p>{props.title}</p>
            <p>{props.body}</p>
        </div>
    );
}

export default PostCard;
```
---
Bạn có thấy được rằng PostList.tsx và PostCard.tsx điểm chung của 2 Thằng này đều sử dụng chính xác cùng 1 Type

Mình tạo ra 1 folder, folder có tên types

Trong Folder mình tạo ra file tên là types.ts

chứa đoạn code sau

```TSX
// export là 1 trong các tính năng module
export type PostProps = { id: number; title: string; body: string };
```

Bây giờ code 2 file gọn gàng hơn.


PostList.tsx
```TSX
import React from 'react';
import PostCard from '../postCard/PostCard';
import { PostProps } from '@types/types';


async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PostList = async () => {
    const data: PostProps[] = await getData();
    return (
        <div className="postList">
           {data.map((post:PostProps { id: number; title: string; body: string }) => (
                <PostCard key = {post.id} {...post}>
           ))}

        </div>
    );
}

export default PostList;
```
Cách 1: lấy props - làm đại diện cho truyền dữ liệu từ cha sang con.
PostCard.tsx
```TSX
import React from 'react';
import { PostCard } from '@types/types';

const PostCard = async (props: PostProps) => {
    return (
        <div className="postCard">
            <p>{props.title}</p>
            <p>{props.body}</p>
        </div>
    );
}

export default PostCard;
```
 Cách 2: truyền thẳng, không dùng props mà chuyển dữ liệu đó từ cha sang con dùng trực tiếp.
PostCard.tsx
```TSX
import React from 'react';
import { PostCard } from '@types/types';

const PostCard = async ({title, body}: PostProps) => {
    return (
        <div className="postCard">
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
}

export default PostCard;
```
---

### Cẩn thận đoạn này

Mô tả các lấy dữ liệu truyền từ con lên cha.

Chứa 3 files

Child.tsx

```TSX
import React from "react";

const Child = () => {
  return <div>Child</div>;
};

export default Child;
```

SecondChild.tsx

```TSX
import React from 'react'

const SecondChild = () => {
  return (
    <div>SecondChild</div>
  )
}

export default SecondChild
```

Parent.tsx

```TSX
import React from "react";

const Parent = ({ children }: {children:React.ReactNode}) => {
  return (
    <div>
      <h1>This is the parent</h1>
      {children}
    </div>
  );
};

export default Parent;
```

Tổng hợp để hiển thị

```TSX
import Child from "@/components/childrenParent/Child";
import Parent from "@/components/childrenParent/Parent";
import SecondChild from "@/components/childrenParent/SecondChild";
import React from "react";

const ChildrenPropExample = () => {
  return (
    <div>
      <Parent>
        <SecondChild />
      </Parent>
    </div>
  );
};

export default ChildrenPropExample;
```

## TypeScript React Events

Trong React TypeScript quy định event có type là 
```TSX
React.ChangeEvent<HTMLInputElement>
React.MouseEvent<HTMLButtonElement>

Tùy thuộc vào sự kiện mình sử dụng là gì

Phần tử HTML nào bị tác động

Hai ví dụ trên là minh họa cho 2 trường hợp

- TH1: Thay đổi nội dung trong ô input, lắng nghe sự thay đổi changeEvent

- Th2: Lắng nghe button khi nào bị click.MouseEvent

Còn rất nhiều sự kiện khác.

```
Bạn có thể nhìn thấy

```TSX
"use client";
import React from "react";

const EventExample = () => {
    // Lắng nghe sự kiện gõ vào ô input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // tại sao search ko có e.preventDefault(); vì nó không có hành vi submit form mặc định khi gõ. Cho nên không cần.
    console.log(e.target.value);
  };

  // Lắng nghe sự kiện nhấn nút tìm kiếm
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Ngăn chặn các hành vi mặc định, 
    e.preventDefault();
    //  nó ngăn chặn trình duyệt thực hiện hành động mặc định và không tiến hành tải lại trang hoặc gửi dữ liệu form đi. Điều này cho phép chúng ta kiểm tra và xử lý dữ liệu form, thực hiện các tác vụ yêu cầu trước khi cho phép trình duyệt tiếp tục hành vi submit mặc định.

    // log ra cái nội dung 
    console.log("Searched!");
  };

 // Lắng nghe sự kiện nhấn button xóa
 // tại vì mình phải truyền 2 đối số
 // Khai báo Type cho cả 2. Cái thứ 1 sự kiện và Cái thứ 2 id của post
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    // Ngăn chặn các hành vi mặc định
    e.preventDefault();
    // log ra cái nội dung kèm id
    console.log(`Post ${id} has been deleted!`);
  };

  return (
    <div className="eventExample">
      <form>
        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handleChange}
        />

        {/*chỉ cần hover và onClick sẽ có được type của sự kiện, từ copy bỏ lên hàm mà chúng ta dự truyền sự kiện vào để xử lý*/}

        <button onClick={handleClick}>Search</button>
      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>

        <button onClick={(e) => handleDelete(e, 1)}>Delete</button>

      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
      </form>
    </div>
  );
};

export default EventExample;
```


## TypeScript React useState

```TSX

"use client";
// Sử dụng React và useState
import React, { useState } from "react";

// Dùng aliases để đặt trước UserType
type UserType = {
  sessionId: number;
  name: string;
};

const UseStateExample = () => {
 // username của ô input rỗng  
  const [username, setUsername] = useState("");
  
 // Đặt cái type cho cho useState aliases đã khai báo ở trên hoặc là null " null cho lần đầu mới vào trang"
  const [user, setUser] = useState<UserType | null>(null);
  // OR
  // const [user, setUser] = useState<UserType>();

// Ở đây 2 sự kiện, 1 sự kiện nhập, 2 sự kiện submit form đã điền

  // Sự kiện 1 được kích hoạt khi người dùng nhập vào ô input, tác dụng giúp set lại setUsername
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // Sự kiện 2 được kích hoạt khi người dùng nhấn vào button, để gửi dữ liệu, tác dụng setUser là các thông tin từ state username
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      // Chỗ này không bị TypeScript báo lỗi vì đã set Type ( - đoạn <UserType | null> -) Cái UserType đã được định nghĩa
      name: username,
      sessionId: Math.random(),
    });
  };

  // Trong giao diện có 2 điểm chính 1 câu điều kiện hiển thị, đăng nhập thành công Hoặc là form để nhập thông tin đăng nhập

  // Hiển thị name nếu tồn tại {user?.name} / Hỏi user có tồn tại name hay không nếu có thì sẽ hiển thị ra

  return (
    <div className="useStateExample">
      {user ? (
        `${user.name} logged in`
      ) : (
        <form>
          <input type="text" placeholder="Username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>
      )}
      {/* BE AWARE: HÃY NHẬN THỨC */}
      {user?.name}
    </div>
  );
};

export default UseStateExample;

```

## TypeScript React Context API Tutorial.

Bắt đầu đoạn này nó có nhiều file hơn nên xem video để hiểu hơn

https://www.youtube.com/watch?v=WlxcujsvcIY&t=956s

```TSX
"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const UseContextExample = () => {

  const {state,dispatch} = useContext(ThemeContext)

  console.log(state)
  return (
    <div className="useContextExample">
      <button onClick={()=>dispatch({type:"CHANGE_THEME"})}>Change Theme</button>
      <button onClick={()=>dispatch({type:"CHANGE_FONTSIZE", payload:20})}>Change Font Size</button>
    </div>
  );
};

export default UseContextExample;

```


ThemeContext.tsx
```TSX

type StateType = {
  theme: string;
  fontSize: number;
};

type ActionType = {
  type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
  payload: number;
};

const INITIAL_STATE = {
  theme: "dark",
  fontSize: 16,
};

export const ThemeContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

// Trạng thái: State, Hành động: Action
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "CHANGE_FONTSIZE":
      return {
        ...state,
        fontSize: action.payload,
      };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

```


## TypeScript React Reducer

## TypeScript React Context & useReducer

```TSX
"use client";
import { createContext, useReducer } from "react";

type StateType = {
  theme: string;
  fontSize: number;
};

// type ActionType = {
//   type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
//   payload?: number;
// };

//Discriminated Unions
type ColorActionType = {
  type: "CHANGE_THEME";
};
type SizeActionType = {
  type: "CHANGE_FONTSIZE";
  payload: number;
};

type ActionType = ColorActionType | SizeActionType;

const INITIAL_STATE = {
  theme: "dark",
  fontSize: 16,
};

export const ThemeContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "CHANGE_FONTSIZE":
      return {
        ...state,
        fontSize: action.payload,
      };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

```

```TSX

"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const UseContextExample = () => {

  const {state,dispatch} = useContext(ThemeContext)

  console.log(state)
  return (
    <div className="useContextExample">
      <button onClick={()=>dispatch({type:"CHANGE_THEME"})}>Change Theme</button>
      <button onClick={()=>dispatch({type:"CHANGE_FONTSIZE", payload:20})}>Change Font Size</button>
    </div>
  );
};

export default UseContextExample;

```


## TypeScript React UseRef

page.tsx

```TSX

"use client";
import React, { useEffect, useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    console.log("username is: " + usernameInputRef.current?.value);
  };

  return (
    <div className="useRefExample">
      <input ref={inputRef} type="text" placeholder="focus here" />
      <input ref={usernameInputRef} type="text" placeholder="username" />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default UseRefExample;

```

## TypeScript React Generics

Item.tsx

```TSX
import React from "react";

type User = {
  id: number;
  username: string;
};

type ItemProps<T extends User> = {
  id: number;
  title: string;
  extra: T[];
};

const Item = (props: ItemProps<{ id: number; username: string }>) => {
  return <div>Item</div>;
};

export default Item;
```

ItemList.tsx

```TSX

import React from "react";
import Item from "./Item";

const ItemList = () => {
  return (
    <div>
      <Item
        id={1}
        title="post title"
        extra={[
          {
            id: 1,
            username: "john",
          },
        ]}
      />
    </div>
  );
};

export default ItemList;

```

## TypeScript Combined Types and Exclude - Các kiểu kết hợp và loại trừ của TypeScript.

Loại trừ - Exclude, khi mà con truyền lên cho cha hiển thị, mình loại trừ các giá trị mà mình không muốn nó hiển thị

Hoặc khi combine-kết hợp 2 hay nhiêu cái, ta muốn loại trừ 1 vài cái trường hợp nào đó ta không muốn nó truyền dùng Exclude vẫ được.

Shape.tsx
```TSX
import React from "react";

type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type TwoDShapeType = Exclude<ShapeType, "cube">; //Exclude: Loại trừ

type ThemeType = "dark" | "light";
type ColorType = "red" | "blue" | "yellow";

type ItemProps = {
  // color: `${ThemeType}-${ColorType}`;
  color: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">; //Exclude: Loại trừ
};

const Shape = (props:ItemProps) => {
  const shape: ShapeType = "cube";
  const twoDShape: TwoDShapeType = "square";

  return <div>Shape</div>;
};

export default Shape;

```

ShapeList.tsx
```TSX
import React from "react";
import Shape from "./Shape";

const ShapeList = () => {
  return <div>
    <Shape color="light-yellow"/>
  </div>;
};

export default ShapeList;

```
