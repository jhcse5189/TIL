# Type Cast

> PS 중 C-style '(char)'로 캐스팅하면서 std::cout 에서 캐스팅이 필요할 때 어떻게 쓰는게 일반적인지 궁금해졌다.

C-style로 캐스팅을 하면 타입 체크를 따로 하지 않는다는 단점이 있다고 한다. C++에 static_cast, dynamic_cast, reinterpret_cast, const_cast 등 여러 cast operator들이 있다는데 (다 필요할까 싶기도 하고..) 천천히 알아보자.

## # static_cast

```cpp
static_cast<new_type>(expression)
```

PS에서는 문자열 문제로 int와 char 간의 형변환을 자주 사용하는데 기본 자료형 간 변환이 필요할 떄 static_cast를 쓰면 된다. static_cast는 range 검사를 하지 않기 때문에 형에 맞지 않으면 overflow 된다.

## Ref.
~~~
ㅇ https://boycoding.tistory.com/154
ㅇ https://gsong.pe.kr/dev/2011/12/15/ec-9d-bc-eb-b0-98-cast-static_cast-const_cast-dynamic_cast-reinterpret_cast.html
ㅇ https://books.google.co.kr/books?id=eC-iLe_iET8C&pg=PA107&lpg=PA107&dq=c%2B%2B+cast+tradition&source=bl&ots=HZmDLiI-m7&sig=ACfU3U0BUxTY0iNDOL2TynyeI8shxRskfA&hl=ko&sa=X&ved=2ahUKEwjj06SPxOH2AhWhEHAKHWEhDMkQ6AF6BAgmEAM#v=onepage&q=c%2B%2B%20cast%20tradition&f=false (C++ Primer Plus)
~~~
