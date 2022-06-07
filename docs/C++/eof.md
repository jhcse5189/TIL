# EOF

> "End Of File", 모든 파일의 끝에는 EOF가 붙어있다. C++에서 std::cin으로 입력을 받다가 EOF을 읽으면 cin.eof()는 true가 된다.

```cpp
while (!std::cin.eof())
{
	getline(std::cin, s);
	
	// do something
}
```

PS 시에는 입력을 파일로 줘서 채점을 하기 때문에 상관없지만, 터미널에서는 EOF를 수동으로 넣어줄 수 있다. 윈도우 기준 Ctrl + Z, UNIX 기준 Ctrl + D이다.

## Example.
~~~
[o] 백준 1371번, 가장 많은 글자
[o] 백준 11718번, 그대로 출력하기
[ ] 백준 11719번, 그대로 출력하기 2
~~~

## Ref.
~~~
ㅇ https://www.acmicpc.net/board/view/24867 (BJ 질문)
~~~
