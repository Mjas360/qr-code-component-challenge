# Frontend Mentor - QR code component solution

This is a solution to the QR code component challenge on Frontend Mentor designed with react. [Frontend Mentor challenges](https://www.frontendmentor.io/) help you improve your coding skills by building realistic projects.

## Table of contents

* [Overview](#overview)
  * [Screenshot](#screenshot)
  * [Links](#links)
* [My process](#process)
  * [Built with](#built_with)
  * [What I learned](#learn)
  * [Continued development](#dev)
  * [Useful resouces](#resources)
* Authour

# <a name="overview"></a> Overview
###### <a name="screenshot"></a> Screenshot

![Screenshot (92)](https://user-images.githubusercontent.com/95770269/218305519-40f8ca15-d56d-4be8-866c-18e62f944c6d.png)

###### <a name="links"></a> Links
* Solution URL: (https://github.com/Mjas360/qr-code-component-challenge)
* Live site URL: (https://qr-code-95dec.web.app/)

# <a name="process"></a> My Process

###### <a name="built_with"></a> Built with
* React
* scss

###### <a name="learn"></a> What I learned
I learnt how to organize the footer and QR Code Card using flexbox, and also understanding the use of Main and Cross-axis alignment to center the QR Code Card.

```
.qr-code {
      width: auto;
      height: auto;
      background: white;
      padding: 1rem;
      display: flex;
      flex-flow: column;
      align-items: center;
      border-radius: 15px;
      box-shadow: 0 0 5 rgba(0, 0, 0, 0.288);
}

```
I also learnt how to make a responsive site using @mixin and @include directive on scss.

```
@mixin mobile {
    @media screen and (max-width: 480px) {
        @content;
    }
}

@mixin tablet {
    @media screen and (max-width: 768px) {
        @content;
    }
}

@mixin laptop {
    @media screen and (max-width: 1200px) {
        @content;
    }
}

```

The @include directive

```
@include tablet(){
      width: auto;
        }
@include mobile(){
         width: auto;
        }
```

###### <a name="dev"></a> Continued development
This design might be great for my future projects, like a QR Code generator.

###### <a name="resources"></a> Useful resources
  * [Interneting](https://www.internetingishard.com/html-and-css/) Is Hard - A Friendly Web Development Tutorial for Complete Beginners, Helped me on learning    the basics of Frontend Development.

# <a name="author"></a> Author
* Github - [Mjas360](https://github.com/Mjas360/qr-code-component-challenge)
* Frontend Mentor -[FrontendMentor](https://www.frontendmentor.io)
