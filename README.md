# Modul Typescript Bahasa Indonesia

Created with :heart: by Admin RPL

## Daftar Isi

- [Modul Typescript](#modul-typescript)
  - [Daftar Isi](#daftar-isi)
  - [Pengenalan Typescript](#pengenalan-typescript)
    - [Penjelasan Typescript](#penjelasan-typescript)
    - [Proses Instalasi Typescript](#proses-instalasi-typescript)
      - [Persiapan](#persiapan)
      - [Installation](#installation)
  - [Tipe Data](#tipe-data)
    - [Type Anotations](#type-anotations)
    - [Type Inferences](#type-inferences)
    - [Tipe Data Primitif](#tipe-data-primitif)
      - [Undefined vs Null](#undefined-vs-null)
    - [Array](#array)
    - [Enums](#enums)
    - [Tuples](#tuples)
    - [Any Type](#any-type)
    - [Type Assertion/Type Casting](#type-assertion-type-casting)
    - [Unknown Type](#unknown-type)
    - [Union Type](#union-type)
    - [Object Type](#object-type)
    - [Optional Property](#optional-property)
    - [Type Aliases](#type-aliases)
    - [Interface](#interface)
      - [Apakah Interface == Type Aliases ?](#apakah-interface--type-aliases-)
    - [Declaration Merge](#declaration-merge)
    - [Aliases](#aliases)
    - [Generics Type](#generics-type)
  - [Konsep Dasar di Typescript](#konsep-dasar-di-typescript)
    - [Functions](#functions)
      - [Parameter Optional dan Default](#parameter-optional-dan-default)
      - [Parameter Rest](#parameter-rest)
      - [Never](#never)
    - [Statement Control Flow](#statement-control-flow)
      - [`if`](#if)
      - [`switch case`](#switch-case)
      - [Perulangan `for`](#perulangan-for)
      - [Perulangan `while`](#perulangan-while)
      - [`break` dan `continue`](#break-dan-continue)
  - [Konsep Class di Typescript](#konsep-class-di-typescript)
    - [Class](#class)
    - [Access Modifiers](#access-modifiers)
      - [Private](#private)
      - [Public](#public)
      - [Protected](#protected)
      - [Readonly Properties](#readonly-properties)
    - [Inheritance](#inheritance)
      - [Constructor](#constructor)
      - [Method Overriding](#method-overriding)
    - [Static](#static)

## Pengenalan Typescript

---

### Penjelasan Typescript

Secara singkatnya, Typescript adalah Typed Javascript. TypeScript adalah bahasa pemrograman **open-source** yang dibangun di atas **Javascript**. Typescript dikembangkan oleh **Microsoft**. Dengan karakteristik yang sama dengan Javascript, Typescript dapat berfungsi di browser apa pun, OS apa pun, lingkungan apa pun yang mendukung Javascript.

Sebelum memulai tutorial, alangkah baiknya jika kita memahami proses bagaimana sebuah file Typescript bekerja. Seluruh **kode Typescript** dituliskan dengan format ekstensi `.ts` di mana selanjutnya dikompilasi ke dalam bahasa **pemrograman Javascript** oleh **compiler Typescript** dengan menjalankan command `tsc <filename>.tsc`. Hal ini akan menghasilkan file Javascript yang dapat dijalankan di berbagai browser.

![Proses Compiling](images/proses-compiling.png)

Keuntungan dalam menggunakan Typescript akan membuat kode kita lebih mudah dibaca dan di-_debug_ dibandingkan menggunakan Javascript. Typescript adalah bahasa pemrograman yang **_strongly type_** (Seperti Java, C#, dan C/C++).

Pada dasarnya, sebaiknya diperlukan pemahaman general mengenai Javascript sebelum menggunakan Typescript. Konsep untuk penggunaan NodeJS maupun NPM (Node Package Manager) juga diperlukan meskipun dapat dipelajari seiring waktu.

![image](https://res.cloudinary.com/practicaldev/image/fetch/s--i0CSAaCp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.pinimg.com/564x/a5/f5/3f/a5f53fc0b1f7d182ea201123d4c3d750.jpg)

Keuntungan lainnya:

- Adanya intellisense yang membuat proses pengembangan menjadi lebih efisien
- Kompatibilitas pada browser dengan versi lama javascript

### Proses Instalasi Typescript

#### Persiapan

Sebelum memulai materi, terdapat beberapa hal yang perlu dipersiapkan:

1. Web Browser

   Contoh: Google Chrome (recommended), Mozilla Firefox, Microsoft Edge, atau Safari.

2. Text Editor

   Contoh: [Visual Studio Code](https://code.visualstudio.com/download) (recommended), Sublime Text, Atom, [Notepad++](https://notepad-plus-plus.org/downloads/v8.4.5/), atau Notepad.

3. Koneksi Internet

#### Installation

Untuk menginstall Typescript, kita perlu menginstall Node.js terlebih dahulu. Silahkan download dan install Node.js jika belum pernah menginstall sebelumnya pada [Node.JS](https://nodejs.org/).

Proses instalasi adalah sebagai berikut.

1.  Setelah menginstall Node.JS, kita sekarang dapat menjalankan package manager `npm` untuk menginstall compiler Typescript. Install compiler Typescript secara global dengan command berikut pada terminal (comand-promp [cmd], etc.)

```bash

npm install -g typescript

```

2.  Siapkan project yang akan menggunakan Typescript

3.  Buat file Typescript dengan extension `.ts`

4.  Compile file Typescript yang telah dibuat dengan command

```bash
tsc namafile.ts --out filetujuan.js
```

Atau jika nama file Typescript dan Javascript yang diinginkan sama, cukup jalankan compiler dengan command.

```bash
tsc namafile.ts
```

Untuk menjalankan compiler setiap ada perubahan pada file Typescript yang di-save, gunakan command berikut.

```bash
tsc namafile.ts -w
```

## Tipe Data

---

Pada Javascript penggunakan tipe data bukanlah yang terlalu diperhatikan saat penulisan code. Karena Javascript menggunakan dynamic data type yang artinya tipe datanya **tidak memerlukan deklarasi** secara eksplisit dan akan dicheck pada saat **run-time**(saat menjalankan code). Sebaliknya typescript mengunakan static data type yang membuat suatu variabel harus **memiliki deklarasi tipe data** yang pasti sehingga tidak dapat diasign ke tipe data lainnya dan akan dicheck saat **compile-time** (saat membuat code).

### Type Anotations

Type annotations digunakan untuk memaksa peggunaan _type checking_ pada pada code. Type anotations merupakan fitur utama yang memebedakan Typescript dengan Javascript. Type anotations dapat dilakukan dengan menggunakan `: Type`, titik dua (`:`) dikuti dengan Type yang akan digunakan. Berikut contoh penggunaan Type Anotation.

```typescript
let age: number = 32; // number variable

let name: string = "Mise"; // string variable

let isUpdated: boolean = true; // Boolean variable
```

Dari contoh diatas dapat dilihat bahwa setiap variabel di berikan Type Anotations sesuai dengan value yang akan disimpan. Jika variabel diberikan value yang tidak sesuai dengan type yang telah diasign pada saat deklarasi, compiler Typescript akan memberikan error.

![image](https://user-images.githubusercontent.com/70748569/215137421-3da856da-b308-4735-bc38-ba90d6b98438.png)

Berikut cara penggunaan type anotations pada typescript

![image](https://user-images.githubusercontent.com/70748569/215133160-6d095ce6-c060-4dd6-a48a-91f84b0ad25f.png)

### Type Inferences

Type inferences adalah fitur dalam TypeScript yang memungkinkan tipe data untuk diinferensikan secara otomatis dari nilai yang digunakan. Ini berarti bahwa kita tidak perlu secara eksplisit menyatakan tipe data dari sebuah variabel(menggunakan type anotations), karena TypeScript dapat menentukannya dengan sendirinya.

Berikut contoh penggunaan type inferences:

```typescript
let num = 31;
```

Sekilas tidak ada perbedaan dengan pendeklarasian variabel pada Javascript, akan tetapi jika type dihover, typescript akan dapat secara langsung memberikan tipe data untuk variabel `num` yaitu `number` karena Typescript mengetahui bahwa tipe data yang disimpan pada variabel `num` adalah sebuah `number`.

![image](https://user-images.githubusercontent.com/70748569/215136742-a33d203a-6a3d-4918-81de-2fcc436e4f6c.png)

Dengan menggunakan type inferences, kita dapat menulis kode yang lebih singkat dan lebih mudah dibaca tanpa mengorbankan kejelasan tipe data. Namun, kita juga bisa memberikan tipe data secara eksplisit jika diperlukan karena pada beberapa kasus type anotations akan tetap diperlukan.

### Tipe Data Primitif

Sebelumnya kita telah melihat bagaimana type di kaitkan pada suatu variabel, salah satu jenis type yang dapat kita gunakan adalah tipe data primitif.

[Tipe data primitif](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) dalam Javascript adalah data yang bukan sebuah object, tidak memiliki methods atau properti dan tidak dapat berubah. Berikut merupakan adalah tipe data primitif dalam Javascript:

- [string](https://developer.mozilla.org/en-US/docs/Glossary/String)

- [number](https://developer.mozilla.org/en-US/docs/Glossary/Number)

- [bigint](https://developer.mozilla.org/en-US/docs/Glossary/BigInt)

- [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)

- [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)

- [symbol](https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Global_Objects/Symbol)

- [null](https://developer.mozilla.org/en-US/docs/Glossary/Null)

Typescript versi terbaru telah men-support penggunaan semua tipe data tersebut.

#### Undefined vs Null

Tipe data `Undefined` dan `Null` pada typescript merupakan subtype dari tipe data lainnya, artinya varibel yang memiliki tipe data selain null/undefined bisa saja memiliki value null/undefined.

Secara garis besar `undefined` artinya value untuk variabel tersebut tidak diassign ke value apapun dan **kita tidak tahu value** tersebut, itu merupakan **ketidakadaan value yang tidak disengaja**. Di lain sisi `null` menandakan suatu variable yang **kita ketahui bahwa valuenya memang tidak ada** dan itu merupakan **kesengajaan untuk membuat nilainnya tidak ada**.

Secara default setiap variabel yang tidak diassing ke value apapun maka akan bernilai `undefined` di Typescript.

![image](https://user-images.githubusercontent.com/70748569/215145360-36fca437-3a89-4225-b636-661886203591.png)

### Array

Tidak jauh berbeda dengan Javascript cara penggunaan array juga sama, yang membuatnya berbeda adalah pengguan strict type pada data yang akan disimpan dalam array.

Berikut beberapa cara penggunaan array di Typescript:

![image](https://user-images.githubusercontent.com/70748569/215149313-0b8e26eb-e67d-4ee2-ba91-db0f09a358e8.png)

Saat menggunakan array dan ingin dan pada state awal array tidak memiliki value, array harus tetap diassign ke suatu value meskipun itu empty array jika tidak array akan dianggap undefined dan tidak dapat diassign ke suatu value nantinya.![image](https://user-images.githubusercontent.com/70748569/215150968-25774205-2fe5-4570-8b06-ad33df7089ad.png)

### Enums

Enums merupakan salah satu fitur yang disediakan Typescript yang memungkinkan kita untuk dapat mendefinisikan suatu kumpulan konstanta yang diberi label.

Contog kasus jika dalam suatu database kita menyimpan jenjang pendidikan dengan kode

```

1 = SD

2 = SMP

3 = SMA

4 = S1

```

Kita dapat memanfaatkan enum untuk mempermudah kita memahami code yang kita buat.

```typescript
enum Education {
  SD = 1,

  SMP,

  SMA,

  S1,
}

let Mise = { age: 20, education: Education.SMA };

console.log(Mise.education); //3
```

Code kita diatas akan dapat lebih mudah dipahami dari pada kita harus mengecek ke database setiap kali kita ingin tahu maksud dari suatu kode yang digunakan. Pada enum `SD` kita tambahakan asignment `SD = 1` karena secara default enum dimulai dari 0.

### Tuples

Tuples merupakan tipe data yang memiliki cara kerja yang mirip dengan array, akan tetapi tuples memiliki tipe data yang spesifik untuk setiap index-nya. Tidak hanya itu jumlah anggota dalam tuple juga harus berurutan dan fixed.

```typescript
let arr: [string, number, string, boolean] = ["string", 10, "lagi", true]; //Valid

let arr1: [string, number, boolean] = []; //Error

let arr2: [string, number, boolean] = ["string", 10, "lagi"]; //Error

let arr3: [string, number, boolean] = ["string", 10, true, "lagi"]; //Error
```

Tuple akan berguna saat kita berurusan dengan function yang memiliki parameters yang memilki tipe data yang berbeda-beda, dan fixed dengan memanfaatkan menggunakan spread operator.

### Any Type

any type di Typescript adalah tipe yang dapat digunakan untuk mewakili semua jenis tipe data. Biasanya digunakan pada variabel yang nilainya belum ditentukan atau dapat berubah-ubah. Variabel yang diberi tipe any tidak akan diberi peringatan oleh compiler jika nilainya diubah menjadi tipe yang berbeda-beda sekalipun.

```typescript
let value: any;

value = "string"; //valid

value = 31; //valid

value = true; //valid
```

Secara umum, menggunakan tipe any dapat mengurangi kemampuan Typescript untuk melakukan strong type checking. Selain itu Intellisense Typescript tidak akan ditampilkan karena Typescript tidak tahu tipe data dari variabel any. Oleh karena itu sangat dianjurkan untuk menggunakannya dengan hati-hati dan **hanya jika diperlukan**.

![image](https://devs.lol/uploads/2021/11/meme-dev-humor-fixing-typescript-errors-with-any-178.jpg)

![image](https://devs.lol/uploads/2021/12/meme-dev-humor-when-you-are-a-typescript-developer-263.jpg)

Sesekali pakai any boleh jika memang udah buntu, tapi jangan sampai tuman o (_￣ ▽ ￣_)ブ

### Type Assertion/Type Casting

Type Assertion memungkinkan Kita untuk mengatur tipe dari sebuah variable/value dan memberi tahu compiler untuk tidak menyimpulkannya. Ini adalah saat kita, sebagai seorang programmer, mungkin memiliki pemahaman yang lebih baik tentang tipe variabel yang ada daripada apa yang dapat disimpulkan oleh TypeScript sendiri.

```typescript
let myVar: any = "a string";

// cara 1

let castedVar = <string>myVar;

// cara 2

let castedVar2 = myVar as string;
```

Pada code diatas, anggapannya `myVar` adalah suatu variable yang dianggap oleh Typescript sebagai any, namun dengan type assertion kita dapa memberitahu Typescript bahwa variabel tersebut pada saat itu merupakan sebuah string. Sehingga kita dapat mendapatkan segala operasi untuk tipe data string pada variabel tersebut, lebih baik dari pada dianggap any.

Type assertion ini akan lebih terlihat penggunaanya saat digunakan untuk mengenali DOM yang disimpan pada sebuah variabel.

### Unknown Type

Unknown adalah tipe data di TypeScript yang digunakan untuk mewakili tipe data yang tidak diketahui. Ini berbeda dari tipe data "any" yang mewakili semua tipe data dan tidak membatasi operasi yang dapat dilakukan pada nilai tersebut. Tipe data "unknown" lebih restriktif daripada "any" dan memerlukan tipe yang sesuai untuk diubah sebelum digunakan. Unknown Type dapat menjadi alternative yang lebih baik dari pada harus menggunakan Any Type.

```typescript
let value: unknown;
value = "hello"; // OK
value = 123; // OK
```

terlihat sama dengan "any" tetapi unknown memiliki restriction lebih ketat.

```typescript
let anyV: any = 31;
anyV.toUpperCase(); // tidak ada error, padahal hal tersebut tidak bisa dilakukan

let unkV: unknown = 12;
unkV.toUpperCase(); //Error, karena unkV belum diketahui tipe data valuenya
```

dari contoh diatas kita bisa lihat bagaimana unknown menghindarkan kita dari penggunaan operasi yang tidak sesuai pada suatu tipe data. Akan tetapi meskipun operasi didukung oleh tipe data yang sesuai "unk" type tetap akan memberikan error karena state dari value tersebut tetap merupakan unknown (tidak diketahui).

```ts
let str: unknown = "string";
str.toUpperCase(); //Error
```

Lalu bagaimana menghadapi case ini, kita harus memberitahu ts bahwa tipe data dari `str` adalah string dengan menggunakan type assertion yang telah kita pelajari sebelumnya.

```ts
let str: unknown = "string"(str as string).toUpperCase(); //Valid
```

### Union Type

Union type adalah tipe data yang menyatakan bahwa suatu variabel atau properti dapat menyimpan nilai dari beberapa tipe data yang berbeda. Union type ditulis dengan menggunakan tanda pipe (|) antara tipe data yang diizinkan.

```typescript
let myValue: number | string | null;

myValue = 2; // Ok

myValue = "string"; // Ok

myValue = null;

myValue = true; // Error, true bukan number atau string
```

Union membuat kita dapat memasukkan lebih dari satu tipe data pada saat membuat variabel. Tidak hanya pada tipe data primitif Union juga dapat digunakan pada segala jenis tipe data, contohnya array:

```typescript
let myArray: (number | string)[]; //harus disimpan dalam kurung

myArray = [42, "hello"]; // Ok

myArray = [true, "world"]; // Error, true bukan number atau string
```

Typescript juga dapat melakukan inferences pada tipe data union

![image](https://user-images.githubusercontent.com/70748569/215161270-247dfdc6-4d85-4f9f-802e-7e57de25202f.png)

### Object Type

Layaknya Javascript, Typescript juga dapat menerapkan static type pada object. Object secara umum merupakan tipe data yang terdiri dari beberapa properti yang terdiri dari key dan value yang menabstraksi suatu hal. Berikut cara penggunaan object pada typescript.

```typescript
let user: { name: string; age: number; hobby: Array<string> } = {
  name: "Mise",
  age: 17,
  skills: ["football", "fishing", "coding"],
};

console.log(user.name); // "Mise"

console.log(user.age); // 17

user.name = 31; //Error

user.hoby = "game"; //Erro, array to string

user.hoby.push(21); //Error, push number ke arr of string
```

atau

```typescript
let user: { name: string; age: number };

user.name = "Salah"; //Error, user belum di asign ke value apapun

user = { name: "Mise", age: 17 };
```

Typescript juga dapat melakukan inferences pada tipe data ini.

![image](https://user-images.githubusercontent.com/70748569/215166757-35222fd6-fc7c-45b3-88da-f7126d590b09.png)

Harus diperhatikan saat membuat object di Typescript kita tidak bisa secara sembarangan menambah/mengurangi properti yang diinginkan.

```typescript
let user: { name: string; age: number };

user = { name: "Mise" }; //Error, age tidak didefinisikan

user = { name: "Mise", age: 17, height: 71 }; //Error, height tidak ada dalam object user

user.weight = 56; //Error, weight tidak ada dalam object user
```

### Optional Property

Untuk mengatasi dimana pada suatu kasus object yang kita buat memiliki properti yang bersifat optional atau dapat dikosongkan, Typescript menyediakan optional property. Optional Propert digunakan dengan menambahkan tanda tanya (`?`) tepat setelah properti yang ingin dijadikan sebagai Optional Property. Seperti berikut

```typescript
let user: { name: string; age: number; hoby?: string[] };

user = { name: "Mise", age: 30 }; //valid, hoby bersifat optional
```

### Type Aliases

Type aliases adalah fitur di Typescript yang memungkinkan kita untuk memberi nama pada tipe data yang sudah ada atau tipe data yang kita buat sendiri (user defined). Ini berguna ketika kita ingin memberi nama yang lebih deskriptif pada tipe data yang digunakan di dalam aplikasi atau ketika ingin menggunakan tipe data yang sama di beberapa tempat dalam aplikasi.

```typescript
type StrOrNum = string | number; //valid

let myData: StrOrNum = 5; //valid

myData = "31"; //valid

myData = true; //error
```

Pada contoh diatas kita menggunakan tipe data `StrOrNum` yang merupakan tipe data `string | number`.

Type aliases banyak digunakan pada sebagai type anotations untuk suatu object seperti berikut:

```typescript
type Person = {
  name: string;

  age: number;

  height?: number;

  weight?: number;

  hoby?: string[];
};

let mise: Person = {
  name: "Mise",

  age: 17,

  height: 67,

  weight: 49,
};

let dahyun: Person = {
  name: "Dahyun",

  age: 22,

  hoby: ["game", "sing"],
};
```

Dengan penggunaan type aliases pembuat tipe data untuk suatu object tertentu dapat menjadi lebih efisien dan kita tidak perlu berulang-ulang melakukan pendefinisian untuk suatu object yang memiliki kesamaan/kemiripan.

### Interface

Interface di TypeScript digunakan untuk mendefinisikan kontrak untuk bentuk objek. Interface menentukan properti dan metode yang seharusnya dimiliki oleh objek tersebut. Interface adalah cara untuk menerapkan struktur tertentu pada objek yang mengimplementasikannya.

Berikut cara penggunaan interface.

```typescript
interface Person {
  name: string;

  age: number;

  height?: number;

  weight?: number;

  hoby?: string[];
}

let mise: Person = {
  name: "Mise",

  age: 17,

  height: 67,

  weight: 49,
};
```

#### Apakah Interface == Type Aliases ?

Dari contoh penggunaan interface terlihat bahwa penggunannya serta fungsinnya sangat mirip. Secara umum interface dan type aliases memiliki kesamaan untuk dapat mendeskrisikan bentuk dari suatu object atau fungsi dan kita dapat bebas mimilih diantara keduannya dalam mendeskripsikan object. Akan tetapi keduanya tetap memiliki perbedaan selain dari syntax, diantaranya

### Declaration Merge

Dalam Typescript, tidak diperbolehkan untuk memiliki lebih type yang memiliki nama yang sama, akan tetapi untuk interface yang memiliki nama yang sama akan di merge menjadi satu kesatuan interface.

```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

type Id = {
  name: string;
};

type id = {
  //Error, duplicate identifier

  age: number;
};

let user: Person = {
  name: "Mise",

  age: 20,
};
```

### Aliases

Berbeda dengan type aliases yang merupakan alias dari berbagai jenis type, interface tidak dapat menjadi alias untuk semua jenis tipe data karena interface sendiri merupakan tipe data yang memiliki aturan dan syntaxnya sendiri,

Diantaranya seperti pada Primitive Type, Union, Tupples.

```typescript

type Mix = [number, string, boolean];

const mix: Mix = [1, "banana", true];

interface InMix = [number, string, boolean]; //Error

const inMix : InMix //Error ^

```

### Generics Type

Generics merupakan fitur yang dibawa Typescript yang membuat kita dapat menggunakan blok code yang reusable yang memiliki tipe data yang bervariasi. Secara umum generics type di buat pada fungsi yang memiliki parameter yang memiliki tipe data yang bervariasi sehingga tipe data yang di deklarasikan pada fungsi juga harus dibuat bervariasi. Akan tetapi kita dapat "menyimpan" tipe datanya kedalam sebuah variabel sehingga tipe datanya akan bergantung dengan tipe data yang didefinisikan saat fungsi ingi digunakan.

```typescript
// Type adalah generic type yang akan bersifat dinamis, nama Type bisa jadi apa saja layaknya variabel

function addId<Type>(obj: Type) {
  let id = Math.floor(Math.random() * 10);

  return { ...obj, id };
}

type Person = {
  name: string;

  age: number;
};

let user: Person = {
  name: "Mise",

  age: 19,
};

// Person adalah tipe data yang akan menggantikan generic Type pada fungsi addId

let userWithID = addId<Person>(user);

// atau

//let userWithID = addId(user)

// tipe data Person akan di inference secara otomatis oleh typscript
```

Tapi problem pada code diatas, seharusnya fungsi `addId` hanya menerima parameter yang bernilai object tetapi kita dapat mengirim string pada fungsi tersebut karena fungsinya akan menangkap string sebagai generic typenya

```typescript
addId<string>("string"); //tetap valid
```

kita dapat menggunakan `extends` tipe data untuk membuat generic type yang akan digunakan.

```typescript
function addId<Type extends object>(obj: Type) {
  let id = Math.floor(Math.random() * 10);

  return { ...obj, id };
}

addId<string>("string"); //Error, tipe data string tidak sesuai constraint
```

Selain itu generic type juga dapat digunakan untuk sebuah interface atau pun type aliases

```typescript

interface Responses<T> {

	status: boolean;

	msg: string;

	data: T;

}

let apiResString: Responses<string> = {

	status: true;

	msg: 'OK';

	data: "Mise";

};

let apiResStringArray: Responses<string[]> = {

	status: true;

	msg: 'OK';

	data: ["Mise", "Anole", "Dahyun"];

};

console.log(apiResString)

console.log(apiResStringArray)

```

## Konsep Dasar di Typescript

---

### Functions

Sama seperti pada Javascript, Typescript menyediakan fitur deklarasi function dengan keyword `function`. Hal yang membedakan adalah penggunaan type annotations pada parameter dan return value function.

```typescript
function name(parameter: type, parameter: type, ...): returnType {
   	// do something
}

```

Misal, kita membuat fungsi penambahan sederhana.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

Pada contoh di atas, function `add()` menerima dua parameter dengan tipe `number`. Ketika melakukan pemanggilan, compiler Typescript akan memastikan setiap argumen yang dimasukkan ke dalam fungsi bahwa mereka adalah angka. Hasil function juga akan dipastikan hanya berupa angka.

Apabila kita memasukkan selain angka, sebagai berikut:

```typescript
let sum = add("10", "20");
```

Maka, kita akan mendapatkan error.

```

error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'

```

Adapun, jika function tidak membutuhkan return value apapun, maka kita bisa menggunakan return type `void`.

```typescript
function echo(message: string): void {
  console.log(message.toUpperCase());
}
```

Kita dapat menggunakan arrow function di dalam Typescript. Arrow function disebut pula sebagai lambda functions pada bahasa pemrograman lain. Fungsinya memiliki kesamaan dengan function biasa, hanya saja bentuknya menjadi sebagai berikut.

```typescript
let sum = (x: number, y: number): number => {
  return x + y;
};

console.log(sum(10, 20)); // output 30
```

#### Parameter Optional dan Default

Pada Typescript, kita dapat melakukan passing argumen tanpa perlu memspesifikasikan parameter seperti Javascript. Compiler akan memastikan agar function tidak memberikan error ketika argumen tidak dimasukkan. Penggunaan parameter optional ini dapat dipakai dengan `?`. Adapun, pemakaiannya adalah sebagai berikut.

```typescript
function multiply(a: number, b: number, c?: number): number {
  // cek apakah argumen c ada
  if (typeof c !== "undefined") {
    return a * b * c;
  }

  return a * b;
}
```

Semenjak ES6, Javascript telah mendukung penggunaan parameter default. Sama seperti Javascript, kita dapat menggunakan parameter default pada Typescript.

```typescript

function name(parameter1: type = defaultvalue1, parameter2: type = defaultvalue2, ...) {

   	// do something

}

```

Sehingga, dapat diaplikasikan sebagai berikut.

```typescript
function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // output 95
```

#### Parameter Rest

Ketika kita tidak dapat memastikan jumlah argumen dalam parameter, kita dapat menggunakan parameter rest. Parameter rest akkan membantu function untuk menerima nol atau lebih argumen pada tipe data yang spesifik. Aturan penggunaan parameter rest adalah sebagai berikut.

- Function hanya memiliki satu parameter rest
- Parameter rest berada di akhir list parameter
- Tipe data dari parameter rest adalah array

Sintaks pada parameter rest adalah sebagai berikut.

```typescript
function name(...parameters: type[]) {
  // do something
}
```

Adapun, aplikasi parameter rest pada function adalah seperti ini.

```typescript
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

console.log(getTotal()); // output 0
console.log(getTotal(10, 20)); // output 30
console.log(getTotal(10, 20, 30)); // output 60
```

#### Never

Never adalah tipe data di TypeScript yang menunjukkan bahwa suatu fungsi atau ekspresi selalu akan menghasilkan exception atau tidak pernah mengembalikan nilai. Ini sering digunakan ketika kita membuat fungsi yang selalu menimbulkan exception atau ketika kita menggunakan metode atau fungsi yang selalu menghasilkan exception. Biasanya hanya digunakan pada suatu fungsi
Sebagai contoh, fungsi berikut selalu akan menimbulkan exception dan dapat ditentukan tipe datanya sebagai "never":

```ts
function error(message: string): never {
  throw new Error(message);
}
// atau
function infiniteLoop(): never {
  while (true) {
    ...
  }
}
```

### Statement Control Flow

#### `if`

Statement `if` akan melakukan pengecekan kondisi. Jika kondisi yang dihasilkan adalah benar, maka statement `if` akan menjalankan statement yang berada dalam body statement tersebut.

Hampir mirip dengan bahasa pemrograman lainnya, terdapat pula statement `if else` di mana akan dilakukan pengecekan kondisi apabila statement `if` tidak terlaksana. Serta statement `else` di mana menjalankan statement apabila tidak ada kondisi yang memenuhi.

Sintaks untuk statement `if` adalah berikut.

```typescript
if (condition) {
  // if statements
} else if (condition2) {
  // if-else statements
} else {
  // else statements berjalan apabila semua kondisi tidak memenuhi;
}
```

#### `switch case`

Untuk nilai `if` yang terlalu banyak, kita dapat menggunakan statement `switch case`. Di sini bentuk sintaksnya adalah berikut.

```typescript
switch (expression) {
  case value1:
    // statement 1
    break;
  case value2:
    // statement 2
    break;
  case valueN:
    // statement N
    break;
  default:
    // apabila tidak ada value yang sesuai
    break;
}
```

Mulanya, statement `switch case` akan mengevaluasi `expression`. Kemudian, statement akan menguji satu per satu nilai yang dicek case-nya (`value1`, `value2`, …, `valueN`). Jika terdapat value-x yang sesuai, maka dijalankanlah statement ke-x tersebut. Apabila tidak terdapat value yang sesuai, dijalankanlah statement pada `default`. Pastikan pula, semua body statement memiliki keyword `break`, sehingga tidak menjalankan body statement pada case yang selanjutnya.

Contoh penerapannya adalah berikut.

```typescript
let targetId = "btnDelete";
switch (targetId) {
  case "btnUpdate":
    console.log("Update");
    break;
  case "btnDelete":
    console.log("Delete");
    break;
  case "btnNew":
    console.log("New");
    break;
} // output “Delete”
```

#### Perulangan `for`

Mirip dengan bahasa pemrograman yang lain, berikut merupakan sintaks untuk statement perulangan.

```typescript
for (initialization; condition; expression) {
  // do something
}
```

Untuk menghasilkan perulangan, statement `for` terdiri atas tiga macam ekspresi bersifat optional yang dipisahkan oleh semicolons (`;`) serta diakhiri dengan parentesis:

- `initialization` - ekspresi yang dievaluasi sebelum perulangan dimulai sebagai inisiasi counter.
- `condition` - ekspresi yang dievaluasi saat setiap akhir iterasi perulangan. Jika `condition` bernilai `true`, maka statement perulangan akan dijalankan.
- `expression` - ekspresi yang dievaluasi sebelum `condition` dievaluasi pada setiap akhir iterasi perulangan. Berfungsi sebagai pengupdate nilai counter.

#### Perulangan `while`

Untuk menjalankan statement hanya dengan `condition` bernilai `true`, kita dapat menggunakan statement perulangan `while`. Bentuk sintaksnya adalah sebagai berikut.

```typescript
while (condition) {
  // do something
}
```

Statement `while` akan mengevaluasi `condition` setiap sebelum iterasi perulangan terjadi.

Adapun kebalikannya, terdapat statement `do while` di mana menjalankan perulangan setiap setiap setelah iterasi perulangan. Di sini, statement akan dipastikan berjalan setidaknya sekali. Bentuk sintaksnya sebagai berikut.

```typescript
do {
  // do something
} while (condition);
```

#### `break` dan `continue`

Untuk mengakhiri setiap perulangan secara paksa, kita dapat menggunakan keyword `break`. Di sini keyword `break` berjalan di dalam statement `for`, `while`, dan `do while`.

Adapun, untuk melakukan skip iterasi perulangan, kita dapat menggunakan keyword `continue`.

Penerapannya adalah sebagai berikut.

```typescript
let numbers = [1, 4, 9, 16, 25, 36, 49];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 16) {
    continue; // lanjut ke iterasi berikutnya saat bernilai 16
  }

  if (numbers[i] == 36) {
    break; // hentikan perulangan saat bernilai 36
  }

  console.log(numbers[i]);
} // output 1, 4, 9, 25
```

## Konsep Class di Typescript

---

### Class

Javascript tidak memiliki konsep class seperti bahasa pemrograman lain seperti Java dan C#. Pada ES6, kita baru dapat menggunakan fungsi constructor dan inheritance untuk membuat class. Baru pada Typescript, penggunaan class lebih diperdalam kembali dalam mendukung kebutuhan object-oriented programming.

Di dalam Typescript, konsep class terdiri atas tiga macam jenis:

1. Constructor => fungsi yang dijalankan pertama kali saat instansiasi object class. Selalu menggunakan penamaan `constructor`.
2. Properties => variable yang dimiliki oleh class
3. Methods => fungsi yang dimiliki oleh class

Berikut adalah contoh dari sebuah class.

```typescript
class Employee {
  // properties
  empCode: number;
  empName: string;

  // constructor
  constructor(code: number, name: string) {
    this.empName = name;
    this.empCode = code;
  }

  // methods
  getEmployeeId(): string {
    return `${this.empCode}-${this.empName}`;
  }
}
```

Class lantas membutuhkan instansiasi agar dapat menjadi object. Selanjutnya, kita dapat memanggil properties/methods untuk mendapatkan value dalam object tersebut.

```typescript
let firstEmployee = new Employee(12, "Rizqi");

console.log(firstEmployee.getEmployeeId()); // output “12-Rizqi”
```

### Access Modifiers

Access modifiers memberikan visibilitas dalam pengaksesan properties atau methods dalam sebuah class. Untuk mengakses apakah Secara singkatnya, Typescript menyediakan tiga macam access modifiers.

1. Private
2. Public
3. Protected

#### Private

Modifier `private` hanya memperbolehkan akses di dalam class itu sendiri. Pengguna tidak akan dapat mengakses properties atau methods private di luar class di mana akan menghasilkan error saat compile time.

Contoh kode pada modifier ini adalah.

```typescript
class Employee {
  // properties
  empCode: number;
  empName: string;

  // constructor
  constructor(code: number, name: string) {
    this.empName = name;
    this.empCode = code;
  }

  // methods
  private getEmployeeId(): string {
    return `${this.empCode}-${this.empName}`;
  }

  showEmployeeId(): string {
    return this.getEmployeeId();
  }
}

let firstEmployee = new Employee(12, "Rizqi");

console.log(firstEmployee.getEmployeeId()); // compile time error
console.log(firstEmployee.showEmployeeId());
```

#### Public

Modifier `public` memberikan akses kepada properties dan methods kepada semua lokasi. Secara default, properties dan methods akan diatur sebagai `public`.

Contoh kode untuk modifier `public` adalah sebagai berikut.

```typescript
class Employee {
  // properties
  empCode: number;
  empName: string;

  // constructor
  constructor(code: number, name: string) {
    this.empName = name;
    this.empCode = code;
  }

  // methods
  public getEmployeeId(): string {
    return `${this.empCode}-${this.empName}`;
  }

  showEmployeeId(): string {
    return this.getEmployeeId();
  }
}

let firstEmployee = new Employee(12, "Rizqi");

console.log(firstEmployee.getEmployeeId()); // compile time error
console.log(firstEmployee.showEmployeeId());
```

#### Protected

Pada modifier `protected`, akses yang diberikan berlangsung untuk di dalam class dan subclass. Ketika sebuah class (sebagai child class) diturunkan dari class lain (sebagai parent class), class tersebut merupakan subclass dari parent class. Penjelasan lanjut tentang hal ini akan dijabarkan pada materi inheritance.

Penggunaan protected ini cukup sederhana di mana menambahkan keyword `protected` sebagai berikut.

```typescript
class Employee {
  protected empCode: number;

  // kode lain
}
```

#### Readonly Properties

Pada saat kita menginginkan sebuah properties menjadi immutable (tidak dapat diganti), kita dapat menggunakan keyword `readonly`. Pengisian properties yang bersifat readonly hanya dapat dilakukan dalam dua kondisi berikut.

- Pada saat deklarasi properties
- Pada constructor kelas

Kedua kondisi tersebut dapat dilihat sebagai berikut.

```typescript
class Employee {
  // properties
  readonly empCode: number;

  // constructor
  constructor(code: number, readonly name: string) {
    this.empCode = code;
    this.name = name;
  }
}

let firstEmployee = new Employee(12, "Rizqi");

firstEmployee.empCode = 12; // compile time error
firstEmployee.name = "Rizqi"; // compile time error
```

Perbedaan penggunaan `readonly` dan `const` adalah berikut.

<table>
  <tr>
   <td>
   </td>
   <td>`readonly`
   </td>
   <td>`const`
   </td>
  </tr>
  <tr>
   <td>Dipakai saat
   </td>
   <td>Properties class
   </td>
   <td>Variable
   </td>
  </tr>
  <tr>
   <td>Inisialisasi dilakukan pada
   </td>
   <td>Saat deklarasi class atau di constructor class
   </td>
   <td>Saat deklarasi variable
   </td>
  </tr>
</table>

### Inheritance

Class dapat menggunakan kembali properties dan methods class lain. Hal ini disebut inheritance dalam Typescript. Class yang mewarisi properties dan methods disebut _child class_. Serta class yang properties dan methods diwariskan dikenal sebagai _parent class_. Untuk melakukan inheritance diperlukan keyword `extends`

Pada contoh berikut class `Employee` sebagai child class meng-inherit class `Person` sebagai parent class.

```typescript
class Person {
  constructor(private firstName: string, protected lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Employee extends Person {
  // semua protected dan public dapat diakses class Employee
}

let firstEmployee = new Employee("Fairuz", "Hasna");

console.log(firstEmployee.firstName); // compile time error
console.log(firstEmployee.lastName); // compile time error
console.log(firstEmployee.getFullName()); // output "Fairuz Hasna"
console.log(firstEmployee.describe()); // output "This is Fairuz Hasna."
```

Penggunaan inheritance dapat memudahkan untuk menggunakan kembali class yang sudah ada tanpa mengganti class tersebut.

#### Constructor

Pada kode sebelumnya, kita dapat melihat bahwa kita dapat menggunakan constructor dari parent class. Namun, bagaimana child class melakukan inisialisasi untuk kelasnya sendiri? Pada kasus seperti ini, digunakan syntax `super()`.

Penggunaan adalah sebagai berikut.

```typescript
// kode class Person
class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // gunakan super() dengan parameter sama dengan constructor parent class
    super(firstName, lastName);

    // kode lanjutan constructor
  }
}

let firstEmployee = new Employee("Fairuz", "Hasna", "Programmer");
```

#### Method Overriding

Pada contoh sebelumnya, ketika kita memanggil method `describe()`, kita akan mendapatkan output “This is Fairuz Hasna.”. Lantas, bagaimana cara membuat method `describe()` sendiri bagi child class? Di kasus ini, kita dapat menggunakan konsep method overriding.

Penggunaannya pun sederhana.

```typescript
// kode class Person

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // gunakan super() dengan parameter sama dengan constructor parent class
    super(firstName, lastName);
  }

  describe(): string {
    return `${super.describe()} I'm a ${this.jobTitle}.`;
  }
}

let firstEmployee = new Employee("Fairuz", "Hasna", "Programmer");
console.log(firstEmployee.describe()); // output "This is Fairuz Hasna. I'm a Programmer."
```

### Static

Untuk pemanggilan properties atau methods tanpa memakai instansiasi object, kita dapat memakai keyword `static`. Properties dan methods static dapat diakses oleh semua instance pada class.

Cara memakai static adalah sebagai berikut.

```typescript
class Employee {
  // static property

  static headcount: number = 0;

  constructor(private firstName: string, private lastName: string) {
    Employee.headcount++;
  }

  // static method
  static getHeadcount() {
    return Employee.headcount;
  }
}

let firstEmployee = new Employee("Lathifa", "Itqonina");
let secondEmployee = new Employee("Fairuz", "Hasna");

console.log(Employee.headcount); // output "2"
console.log(Employee.getHeadcount()); // output "2"
```

Penggunaan static dapat dijumpai pada contoh object `Math`. Kita tidak perlu menginstansiasi properties, seperti `PI`, `E`, dan sebagainya. Begitu pula, methods seperti `abs()` dan `round()` yang merupakan method static.

Agar static properties tidak dapat diganti, kita dapat menambahkan keyword `readonly` setelah keyword `static`.

**Referensi**

- [TypeScript: Javascript With Syntax For Types. (typescriptlang.org)](https://www.typescriptlang.org/)
- [Type Annotation in TypeScript (tutorialsteacher.com)](https://www.tutorialsteacher.com/typescript/type-annotation)
- [TypeScript Tutorial](https://www.typescripttutorial.net/)
- [TypeScript - Google Slides by Programmer Zaman Now](https://docs.google.com/presentation/d/1rnN3ylChcYtg9sBsLT-nY_TFY0FJWKrII75x2FdmpOA/edit#slide=id.g7419b25960_0_284)
