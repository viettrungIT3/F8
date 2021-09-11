# BEM
- Là tiêu chuẩn đặt tên class khi viết CSS

## Ý nghĩa
- Viết tắt của: Block Element Modifier
- Block: khối
- Element: thành phần trong khối
- Modifier: Bổ sung ý nghĩ cho `Block` hoặc `Element`

## Tại sao phải dùng BEM?
- Mỗi người đều có một cách đặt tên, cần phải thống nhất lại
- Member đặt class trùng nhau, CSS đè lên nhau

## Cú pháp
- .block
- .block__element

- .block--midifier
- .block__element--midifier

## Tính ứng dung
- Xây dụng layout website
- Xây dựng thành phần trên website

## Ưu điêm
- Tính rõ ràng
- Tái sử dụng dễ dàng
- Giúp cả team làm việc với nhau dễ dàng
- Tính module, không lo CSS của class này ảnh hưởng lên CSS của class khác

## Nhược điểm
- Tên class dài
- Một số người cho là xấu

## Khi nào sử dụng BEM là phù hợp?
- Dự án nhiều member
- Dự án lớn, số lượng pages nhiều hoặc số lượng thành phần trên giao diện nhiều

## Thực hành
- Làm button
    - Enabled: Pointer, hover effect
    - Disabled: Arow, no effect
- Làm mesage
- Làm thành phần trên website


## Trường hợp block lồng nhau
- Block con là thành phần dùng chung
- Block con chưa nhiều element