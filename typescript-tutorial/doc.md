# Tự học TypeScript cơ bản

## Chương 1: Type cơ bản

TypeScript nó là JavaScript nhưng cải tiến hơn. Các cải tiến hơn ở điểm phải khai báo Type, việc này làm số lượng code trở nên nhiều hơn. Nhưng bù lại code chặt chẽ ít bị lỗi vặt. Code được phát hiện lỗi ngay trước khi chạy.

Như bạn đã biết JavaScript có 2 kiểu dữ liệu chính: Primitive value và Reference value

Cụ thể như sau

- Primitive Data Types: Kiểu dữ liệu nguyên thủy - string, number, boolean, Null, undefined, symbol

- Reference Data Types: Kiểu dữ liệu tham chiếu - arrays, objects, functions, Collections, Dates


## Đi vào chi tiết Type

TypeScript có cơ chế tự động đoán Type nên viết theo cú pháp JS bình thường khi báo biến TypeScript tự động đoán được.

Ngoài ra ta có thể khai báo type trực tiếp cho biến.

Primitive
- string

```TS
let testString: string = "Hello world"; 
```
- number

```TS
let ageWithType: number = 23;
```
- boolean
```TS
let testBoolean: boolean = false;
```
- many types
```TS
// Một biến có thể gán được nhiều type theo cách sau:
let testStringOrNumber: string | number
testStringOrNumber = 10; // lúc này là 10
testStringOrNumber = "Hello, world!"; // lúc này được gán lại thành Hello, world!

let testManyTypes: string|number|boolean 
testManyTypes = 23;
testManyTypes = "Hello"
testManyTypes = true
```

Reference

- Array

Array with type string - Mảng chỉ chứa Type là string
```TS
let testStringArray: string[]
testStringArray = ["one", "two", "three"];
```
Array with type number - Mảng chỉ chứa Type là number
```TS
let testArrayNumber: number[]
testArrayNumber = [12,23,34];
```

Array with many types: - Mảng với nhiều kiểu giá trị

```TS

let testStringOrNumberArray: (string|number)[]
testStringOrNumberArray = [1, "two", 3];


let testStringOrNumberOrBooleanArray: (string|number|boolean)[]
testStringOrNumberOrBooleanArray = [1, 2, "three", false]
```

- Object

```TS
let userObj : {
    username: string,
    age: number,
    isAdmin: boolean,
    phoneNumber: string
    // Lưu ý: Gán đầy đủ dữ liệu đã khai báo, không truyền đủ các giá trị đã khai báo TypeScript cũng báo lỗi.
} = {
    username: 'Tuan',
    age: 23,
    isAdmin: false,
    phoneNumber: '+84778748901'
    // Lưu ý: Gán đầy đủ dữ liệu đã khai báo, không truyền đủ các giá trị đã khai báo TypeScript cũng báo lỗi.
};
```

Đôi khi có 1 vài trường thường ở chế độ optional - có thể có hoặc không. Trong JS và TS cung cấp là "?" 

```TS
// Bây giờ thử toán tử "?" 

let userObject : {
    username: string,
    age: number,
    isAdmin: boolean,
    phoneNumber?: string // optional: có thể có hoặc có thể không
}

userObject = {
    username: 'Tuan',
    age: 23,
    isAdmin: false,
};
```

Có TypeScript cũng cung cấp cho 1 Type chứa toàn bộ giá trị Primitive và References

- any

```TS
let testAny: any

testAny="Hello";
testAny=12;
testAny=true;
testAny=[true];
testAny={};
```

```TS
let testAnyArray : any[]

testAnyArray = [1, "two", false, []];
```

## Chương 2: FUNCTIONS - TypeScript with Functions - Làm việc với Functions.

Phân ra 2 loại. 
- Loại thứ 1 là function không có giá trị trả về.

```TS
// Loại này có type là void
// let sayHi: () => void

let sayHi = () => {
    console.log("Hi, Welcome"); 
    // sử dụng console.log in ra chuỗi. Nhưng hàm này không trả về giá trị.
}
```

- Loại thứ 2 là function có giá trị trả về.

Gán Type trực tiếp cho function
```TS
// Có giá trị trả về, kiểu "type" dữ liệu trả về được quy định sẵn.
let funcReturnString = ():string => {
    console.log("Hi");
    return "Tuan Nguyen";
}
```
Cho TypeScript tự đoán type của function

```TS
// TypeScript có cơ chế tự đoán Type
// Sử dụng cơ chế tự đoán type cho hàm

// Vì đối số tuyền vào là 1 number, mình không khai báo Type cho function. Buộc TypeScript tự đoán dựa trên đối số truyền vào

let mutiple = (num: number) => {
    return num*2;
}
```

Gán Type trực tiếp cho function và đối số truyền vào

```TS
let mutiples = (num: number): number => {
    return num*2;
}
```

Đưa ra kết luận: 
- Khi nào thấy function mà kèm void là biết hàm đó không trả về giá trị. 
- Các hàm có khai báo đầy đủ các giá trị cho tham số đầu vào, cho hàm. Ta biết hàm đó có giá trị return.

Ví dụ:
```TS
let mutipleWithTypeVoid = (num: number): void => {
    // Do something but don't return
}
```

Lấy thêm ví dụ cho các trường hợp tự đoán type của function bằng tham số đầu vào.

```TS
let sum = (num1: number, num2: number) => {
    return num1 + num2;
}

sum(2, 3);

// cố tình truyền vào chuỗi hoặc bất kỳ kiểu dữ liệu khác đều sai.

// sum('Hello', 'World'); // sai

```

Optional with function - Optional chó đối số truyền vào

``` TS
// Mình sẽ để tham số thứ 3 là optional, nếu để như vậy có thể truyền hoặc không truyền tham số "?"
let sum2 = (num1: number, num2: number, another?:number) => {
    if (another) {
        return num1 + num2 + another;
    } else {
        return num1 + num2;
    }
}

sum2(1,2);

// Ta có thể thấy gọi hàm truyền vào chỉ có 2 tham số.
// Ở trên mặc dù nhận vào 3 đối số, nhưng đối số thứ 3 sử dụng optional có thể truyền hoặc không truyền đều được.

```

Truyền nguyên 1 đối tượng vào làm đối số của function

```TS

let user: {
    username: string,
    age: number,
    email: string
} = {
    username: "Tuan",
    age: 23
    email: "tuannt@gmail.com"
}

let func = (user: {username: string, age: number, email: string, phongNumber?: string}) => {
    console.log (user.username);
}

func(user)

```

Ta có thể thấy cách ở trên nó không đẹp lực truyền đối tượng user vào làm đối số.

TypeScript cung cấp thêm cho ta tính năng Type Aliases: Type bí danh.

```TS

let user: {
    username: string,
    age: number,
    email: string
} = {
    username: "Tuan",
    age: 23
    email: "tuannt@gmail.com"
}

type: UserType = {
    username: string,
    age: number,
    email: string,
    phoneNumber?: string
}

// function tự đoán type dựa vào UserType cung cấp
let func = (user:UserType) => {
    console.log (user.username)
}

func(user)

```

Như bạn đã học là void là type gán cho function không có giá trị return. Bạn có thể sử dụng aliases để khai

```TS
// Khai báo 1 aliases là 1 function void

type myFunc = (a:number, b:string) => void;

// dùng trực tiế vào biến
let write: myFunc = (num, str) => {
    console.log(num + ": " + str);
}
```

Aliases: với đối tượng

```TS

// type Aliases
type userType2 = {
    username: string;
    age: number;
    phoneNumber?: string; // "?" Optional có thể có hoặc không
    theme: "Dark" | "Light"; // quy định là chỉ 1 trong 2 cái này, không được chưa bất kỳ kiểu dữ liệu và nội dung khác
}

const userWithTheme: userType2 = {
    username: 'Tuan',
    age: 23,
    theme: "Light"
};
```

## Chương 3: INTERFACE

Interface nó giống như Type aliases nhưng phiên bản cao cấp hơn

Lưu ý có sự khác nhau:

khai báo 1 aliases type 

- type tên = {}

khai báo 1 interfaces type

- interface Itên {}, phải có I ngay đầu của tên

```TS
interface IUser {
    username: string;
    age: number;
    email: string;
}

//Hướng đối tượng, cụ thể là tính kế thừa - Inherit

interface IEmploye extends IUser {
    employeeId: number
}

//Sau khi kế thừa thành công thì IEmploye sẽ sở hữu được các thuộc tính - (property) từ cha, không cần phải khai báo lại. Nó có thể thêm được các thuộc tính riêng biệt của nó. chằng hạn employeeId

// Tạo 1 đối đượng emp dựa trên interface IEmployee
const emp: IEmployee = {
    username: 'Tuan',
    age: 23,
    email: "tuannt@gmail.com",
    employeeId: 1
};

// Tạo 1 đối đượng client dựa trên interface IUser

const client: IUser = {
    username: 'Mi',
    age: 24,
    email: 'micopyrighter@email.com'
}

```

Chúng ta có thể nhận xét rằng client nó chỉ có các thuộc tính được khai báo ở type IUser, employee thì có các thuộc tính được kế thừa IUser vào IEmployee và 1 thuộc tính được bô sung sau cho IEmployee là employeeId.


## Chương 4: GENERICS

```TS
interface IAuthor {
    id: number;
    username: string;
}

interface ICategory {
    id: number;
    title: string;
}

interface IPost {
    id: number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[]; // sử dụng 2 cái Interface đã khai báo ở trên
}
```

Nhưng cách này hạn chế, trong tương lai, extra có thể thêm nhiều cái tags - ITags,... 

Có thể không biết trước sẽ thêm gì trong tương lai.

Việc quay lại và khai báo interface mất nhiều thời gian và rườm rà.

Cải thiện như sau:

```TS
// <T> mình có thể thêm bất cứ cái gì kể cả string, number, ... miễn là dùng interface đó thì khai báo như sau:

interface IPostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[]
}

const testMe: IPostBetter<String> = {
    id: 1,
    title: "post title",
    desc: "post description",
    extra: ["str", "str2"]
}
```

Mở rộng hơn

```TS
interface IAuthor {
    id: number;
    username: string;
}

interface ICategory {
    id: number;
    title: string;
}

interface IPostEvenBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[]
}

// sử dụng 2 interfaces 1 cái IPostEvenBetter 1 cái IAuthor, Cái tổng quát phải có <T>
const testMe2: IPostEvenBetter<IAuthor> = {
    id: 1,
    title: "post title",
    desc: "post description",
    extra: [{id: 1, username: "Tuan"}] // nếu mà gán giá trị vượt quá các khai báo thì báo lỗi
}

// sử dụng 2 interfaces 1 cái IPostEvenBetter 1 cái ICategory, Cái tổng quát phải có <T>
const testMe3: IPostEvenBetter<ICategory> = {
    id: 1,
    title: "post title",
    desc: "post description",
    extra: [{id: 1, title: "Learn TypeScript"}] // nếu mà gán giá trị vượt quá các khai báo thì báo lỗi
}
```
