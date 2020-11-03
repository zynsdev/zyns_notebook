---
title: "Lần đầu học Regex"
des: "Một đoạn kí tự viết lung tung, không hiểu gì cả."
author: "trungluc"
date: "18 tháng 8, 2020"
imageUrl: "https://i.imgur.com/OOCxl67.jpg"
tags: [regex, basic]
---


```javascript
/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm
```

Nếu đây là lần đầu bạn thấy một đoạn mã Regex thì bạn có ngạc nhiên không `¯\_(ツ)_/¯`. Thiệt là điên khùng mà, trông cứ như mấy chiếc mèo nó ngủ trên bàn phím laptop của bạn vậy.

_**Regular Expressions**_ là một thứ vô cùng rối não, cú pháp thì vô cùng ngắn gọn. Nhỏ nhưng có võ, sức mạnh của nó không thể lường trước được. Nó được dùng phổ biến cho việc xác thực form, tìm kiếm và thay thế trong chuỗi.

## Vài khái niệm cần phải biết trước đã
- pattern: là chuỗi regex, là cái đoạn khó hiểu bạn thấy ở đầu bài đó.
- subject: là chuỗi nguồn, là chuỗi mà chúng ta muốn so sánh, tìm kiếm, validate,.
- matches: là những chuỗi khớp với đoạn pattern của bạn.

## Cú pháp 

### Cơ bản
- `/ expression / flags`, ví dụ `/[a-z]+/g`
- `()` dùng để gộp nhóm
- `|` giống như toán tử OR

### Kí tự
- `\w`  kí tự là chữ (không phân biệt hoa thường)
- `\d`  kí tự là số 
- `\s`  khoảng trắng (bao gồm cả dấu tab và ngắt dòng)
- `\W`  **KHÔNG** phải là chữ
- `\D`  **KHÔNG** phải là số
- `\S`  **KHÔNG** phải là khoảng trắng
- `\t`  dấu tab
- `\n`  dấu Enter (dấu ngắt dòng) 
- `.`   bất kì kí tự nào (ngoại trừ dòng mới)

### Xác định số lần xuất hiện
- `*` xuất hiện 0 hoặc nhiều lần
- `+` xuất hiện 1 hoặc nhiều lần
- `?` xuất hiện 0 hoặc 1 lần
- `{x}` xuất hiện chính xác `x` lần
- `{x,y}` xuất hiện ít nhất `x` lần và nhiều nhất `y` lần.

### Ngoặc vuông
- `[abz]` khớp với a, b hoặc z
- `[D-Z]` khớp với bất kì chữ hoa từ D đến Z
- `[^abz]` khớp với tất cả trừ a, b, hoặc z

### Vị trí
- `^abc` khớp với chuỗi abc ở đầu
- `xyz$` khớp với chuỗi xyz ở cuối

###### Xong rồi!
Regex thật sự xịn sò và đáng học. Nếu đang rảnh và không làm gì cả thì hãy mở lap lên và [học Regex ngay và luôn nhá](http://regextutorials.com/intro.html?Basic%20symbols).