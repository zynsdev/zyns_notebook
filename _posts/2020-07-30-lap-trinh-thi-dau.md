---
title: "Tối ưu tốc độ cho lập trình thi đấu"
imageUrl: "https://i.imgur.com/j5vkD5i.jpg"
description: "Tổng hợp những mẹo nhỏ cho lập trình thi đấu"
meta_keyword: "Lập trình thi đấu, Competition Programming"
meta_description: "Tổng hợp những mẹo nhỏ cho lập trình thi đấu"
tags: [cpp, basic]
---

## Tắt đồng bộ cin/cout
Trong C++, `cin` và `cout` có cú pháp dễ dùng hơn `printf` và `scanf`, nhưng nó lại chậm hơn. Đó là do cơ chế đồng bộ `cin` và `cout` của C++. Để tắt đồng bộ thì chỉ cần thêm những dòng này vào hàm `main()`.
```cpp
#inlcude <iostream>
using namespace st;

int main(){
    ios_base::sync_with_stdio(0); 
    cin.tie(0); 
    
    // code 
    
    return 0;
}
```
Như vậy là tốc độ `cin`,`cout` đã bằng với `printf`,`scanf`.

## Sử dụng toán tử BIT
Trong tất cả các ngôn ngữ, các toán tử thao tác với bit luôn có một tốc độ tuyệt vời. Sau đây là một số ví dụ về sử dụng toán tử bit.
### Kiểm tra tính chẵn lẻ không dùng toán tử `%`
```cpp
if (n & 1)
    cout << "Chẵn";
else 
    cout << "Lẻ";
```
### Chia 2 và nhân 2 nhanh hơn
```cpp
n = n << 1;  // Nhân với 2
n = n >> 1;  // Chia cho 2
```
Nâng cao hơn ta có chia và nhân cho `2ᵏ` (chia lấy nguyên)
```cpp
n = n << k;  // Nhân với 2^k
n = n >> k;  // Chia cho 2^k
```
### Hoán đổi giá trị 2 biến sử dụng XOR
```cpp
a ^= b
b ^= a
a ^= b
```
## Tránh sử dụng `strlen()`
```cpp
// Use of strlen() can be avoided by: 
for (i=0; s[i]; i++) 
{ 
} 
// loop breaks when the character array ends. 
```
## Sử dụng các kiến thức toán học
Khi mình mới học Pascal, C++ để lập trình thi đấu, mình đã nhiễm khá nhiều tư tưởng của lập trình. Đôi khi bài tập có thể giải bằng 1 công thức toán học, nhưng mình lại dùng `for` để giải quyết. Đừng giống như mình.

###### Lời cuối
Mình mỏi tay quá, có thêm thời gian mình sẽ update thêm cho các bạn.