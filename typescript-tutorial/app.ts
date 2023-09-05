let variable = "Hello";

/**
 * 1. Define a strict type - Xác định loại nghiêm ngặt
 * 2. Use the same type throughout coding - Sử dụng cùng loại trong suốt quá trình mã hóa
 */

// Primitive Data Types: Kiểu dữ liệu nguyên thủy - string, number, boolean, Null, undefined, symbol

// Như bạn đã thấy variable có giá trị là 1 chuỗi. 
// TypeScript tự đoán cho kiểu dữ liệu đó là chuỗi nên đã tự động gán cho nó Type là string

// Cố tính gán lại cho nó kiểu dữ liệu khác chẳn hạn như kiểu số.

// variable = 20; // TypeScript sẽ tự động báo lỗi.
// variable = false; // TypeScript sẽ tự động báo lỗi.
// variable = []; // TypeScript sẽ tự động báo lỗi.
// variable = {}; // TypeScript sẽ tự động báo lỗi.

variable = 'Hi'; // Hợp lệ

// Cũng tương tự với kiểu dữ liệu là số
let age = 18;

//age = "eighteen"; // TypeScript sẽ tự động báo lỗi.

age = 23; // Hợp lệ 

// Các trường hợp trên có 1 điểm chung là để TypeScript tự đoán type, Trường hợp sau đây là mình sẽ đặt type cụ thể luôn.

// Viết cụ thể:

// let ageWithType: number;
// ageWithType = 23;

// Viết ngắn gọn:
let ageWithType: number = 23;

// các trường hợp báo lỗi
// ageWithType = "twentythree";
// ageWithType = ["thirty"];
// ageWithType = {};


let testString: string = "Hello world"; 

let testBoolean: boolean = false;


// Nếu muốn lưu nhiều hơn 1 kiểu dữ liệu thì làm sao
// Biến này sẽ có thể gán cho nó giá trị là 1 chuỗi hoặc number đều được, 
// vì bạn đã khai báo cho nó có 2 kiểu giá trị string và number

let testStringOrNumber: string | number

testStringOrNumber = 10;
testStringOrNumber = "Hello, world!";

// Nếu thêm vào các giá trị nằm ngoài kiểu dữ liệu khai báo thì vẫn báo lỗi bình thường

//testStringOrNumber = []; // Lỗi
//testStringOrNumber = {}; // Lỗi


// Reference Data Types: Kiểu dữ liệu tham chiếu - Arrays, objects, functions, Collections, Dates

// Array

// TypseScript tự động đoán kiểu dữ liệu, kèm theo đó đoán kiểu dữ liệu bên trong mảng
let names = ["John", "Jane", "Tom"];

// Nếu mà cố tình thêm dữ liệu vào mảng khác với giá trị của Type thì nó sẽ báo lỗi.

//names.push(3); // Argument of type 'number' is not assignable to parameter of type 'string'.
// Không thể gán được tại vì kiểu dữ liệu trong mảng là chuỗi.

// Vì cái này mảng nó là chuỗi nên là
names.push("David"); // Này là hợp lệ

let numbers = [11, 25, 30];

// numbers.push(true); // không hợp lệ, tại vì trong chuỗi TypeScript tự động gán toàn bộ kiểu dữ liệu là số

numbers.push(20); // Hợp lệ

// Gán cụ thể:

let testStringArray: string[]
// testStringArray = [1,2,3]
testStringArray = ["one", "two", "three"];

let testArrayNumber: number[]
testArrayNumber = [12,23,34];

// Có cách nào làm cho 1 mảng có nhiều giá trị? Có bằng cách khai báo các kiểu giá trị tồn tại trong mảng

let testStringOrNumberArray: (string|number)[]

testStringOrNumberArray = [1, "two", 3];

// Ta có thể tận dụng khai báo thêm
// ...
let testStringOrNumberOrBooleanArray: (string|number|boolean)[]

// Objects

let user = {
    username: "John",
    age: 23,
    isAdmin: false,
};

user.username = "Tuan"; // Ok Hợp lệ tại vì username trong object là string

// user.age = "23"; // báo lỗi, vì typeScript xác định age là kiểu dữ liệu number nên khi đổi giá trị mới phải tuân thủ type.

user.age = 25; // ok hợp lệ

// user.isAdmin = "Ok"; // báo lỗi, không thỏa type 

user.isAdmin = true;

// Nếu trong trường hợp mình truy cập vào 1 thuộc tính không tồn tại trong đối tượng thì chuyện gì xảy ra.
// TypeScript sẽ báo lỗi. Ví dụ:

//user.phoneNumber = "+84778748901"; // Thuộc tính này không tồn tại bên trong đối tượng user

// Thay vì để TypeScript tự đoán thì ta sẽ khai báo type thẳng cho nó

// Cách 1:

// let userObj : {
//     username: string,
//     age: number,
//     isAdmin: boolean,
//     phoneNumber: string
// }  

// userObj = {
//     username: 'Tuan',
//     age: 23,
//     isAdmin: false,
//     phoneNumber: '+84778748901'
// };

// Or

// Cách 2:

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

// userObj.username = 'Mi';
// userObj.age = 'Mi';// error type
// userObj.age = 24;

//userObj.isAdmin = 'Mi'; // error type
// userObj.isAdmin = true;

//userObj.phoneNumber = true; // error type
// userObj.phoneNumber = '+8488977823';


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

// Mặc dù không có phoneNumber nó vẫn không báo lỗi




// Kiểu Any Type, chấp nhận mọi kiểu dữ liệu. Sử dụng cẩn thận thằng này vì có thể quay lại con đường JavaScript.

// TypeScript tự đoán.
// let testAny;

//or

// Mình tự gán type cho biến
let testAny: any

testAny="Hello";
testAny=12;
testAny=true;
testAny=[true];
testAny={};

// Array with any

let testAnyArray : any[]

testAnyArray = [1, "two", false, []];


// FUNCTIONS - TypeScript with functions

// Loại function không trả về giá trị

// let sayHi: () => void hàm có kiểu void này nó không trả về bất kỳ kiểu cụ thể nào như số hoặc chuỗi.
let sayHi = () => {
    console.log("Hi, Welcome"); // sử dụng console.log in ra chuỗi. Nhưng hàm này không trả về giá trị.
}

// Loại function có trả về giá trị. ví dụ trả về chuỗi
// xác định cụ thể kiểu giá trị trả về là string, nằm ngoài () là type mà kiểu giá trị trả về.
let funcReturnString = ():string => {
    console.log("Hi");
    return "Tuan Nguyen";
}


// Có thể dùng 1 trong 2 cách: để khai báo type cho hàm

// Cách 1:
// Kiểu này là TypeScript nó tự đoán. 
let mutiple = (num: number) => {
    return num*2;
}

// Cách 2:
// Mình cũng có thể khai báo type trực tiếp luôn vẫn được
let mutiples = (num: number): number => {
    return num*2;
}

// Rút ra kết luận nếu thấy void thì biết mặc định hàm đó không có giá trị trả về

let mutipleWithTypeVoid = (num: number): void => {
    // Do something but don't return
}

// TypeScript tự đoán được return trả về là gì bằng cách nhìn vào kiểu dữ liệu truyền vào. Sau đó đoán
let sum = (num1: number, num2: number) => {
    return num1 + num2;
}

sum(2, 3);


// Mình sẽ để tham số thứ 3 là optional, nếu để như vậy có thể truyền hoặc không truyền tham số "?"
let sum2 = (num1: number, num2: number, another?:number) => {
    if (another) {
        return num1 + num2 + another;
    } else {
        return num1 + num2;
    }
}

sum2(1,2);

// Truyền vào là 1 đối tượng

let func = (user: {username:string, age:number, phoneNumber?: string}) => {
    console.log (user.username)
}

 // phoneNumber là 1 optional truyền hay không truyền đều được

 // user đã được gán giá trị ở dòng 107

func(user) // gọi hàm truyền user vào

//[LOG]: "John Doe" 

// Type Aliases: bí danh

// Việc khai báo type trong hàm nhiều quá gây mất thẩm mỹ. sử dụng bí danh để thay thế

type UserType = {
    username: string,
    age: number,
    phone?: string
}

// khai báo 1 UserType 1 alias, việc này nhìn gọn gàn hàm hơn và user đã gán dữ liệu dòng 107
let betterFunc = (user:UserType) => {
    console.log(user.username);
}

// Type Aliases with function - gán type aliases cho 1 function

// tham số thứ 1 là 1 số tham số thứ 2 là 1 chuỗi và cái hàm này có type void, sẽ không có return
type myFunc = (a:number, b:string) => void;

let write: myFunc = (num, str) => {
    console.log(num + ": " + str);
}

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

// INTERFACES: nó giống như Type aliases nhưng phiên bản cao cấp hơn

/**
 * Lưu ý có sự khác nhau:
 * 
 * khai báo 1 aliases type 
 * 
 * type tên = {}
 * 
 * khai báo 1 interfaces type
 * 
 * interface Itên {}
 */

interface IUser {
    username: string;
    age: number;
    email: string;
}

// Khi mà nó kế thừa IUser, nó có toàn bộ các thuộc tính của IUser
interface IEmployee extends IUser {
    // Bổ sung thêm thuộc tính riêng của IEmployee
    employeeId: number;
}

// Tạo 1 đối đượng emp dựa trên interface IEmployee
const emp: IEmployee = {
    username: 'Tuan',
    age: 23,
    email: "tuannt@gmail.com",
    employeeId: 1
};

// Ngoài ra cũng có thể tạo ra 1 đối tượng dựa interface IUser
const client: IUser = {
    username: 'Mi',
    age: 24,
    email: 'micopyrighter@email.com'
}


// GENERICS

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

// Nhưng cách này hạn chế, trong tương lai, extra có thể thêm nhiều cái tags - ITags,... 
// có thể không biết trước sẽ thêm gì trong tương lai.
// Việc quay lại và khai báo interface mất nhiều thời gian và rườm rà.

// Cải thiện như sau:

// <T> mình có thể thêm bất cứ cái gì kể cả string, number, ... miễn là dùng
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
