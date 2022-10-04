# 정렬

## # Index.

~~~

[o] 백준 1015번, 수열 정렬

~~~

### # 백준 1015번, 수열 정렬

문제를 읽고 이해하는 데에 시간이 좀 걸렸다. 입력으로 배열 A가 주어지면, A를 정렬된 순서로 만드는 인덱스를 원소로 갖는 배열 B를 출력하는 것이다.

`예제 입력 1`처럼 `2 3 1`이 주어지면 `1 2 0`인 배열 B를 찾아주면 되는데, `B[1] = 2`, `B[2] = 3`, `B[0] = 1`이므로 B를 순서대로 출력하면 `1 2 3`으로 A는 정렬된다.

처음 나는 A의 원소를 key로 갖고 value로는 0부터 n-1까지 갖는 `map`으로 생각해보려했으나 key가 중복되는 경우가 있기 때문에 접근을 잘못했다.

사실 중복되는 원소 값들은 정렬되면 그만이고, 꼭 `stable`하게 정렬해야하나 고민할 필요가 없다. 그냥 정렬된 상태를 `stable`하다고 생각하면 되니까! 그냥 global로 선언한 a, b 배열에다가 입력을 받고 b는 정렬된 a라고 하겠다.

```cpp
for (int i = 0; i < n; i++) {
	cin >> a[i];
	b[i] = a[i];
}

sort(b, b + n);
```

b의 원소 값에서 중복이 있더라도 상관없다, 예를 들어서 1이 2개 있더라도, a에서 첫번쨰로 등장하는 1은 인덱스 0일 것이고, 뒤 어딘가에서 등작하는 두번째 1은 인덱스 1이라고 출력하면 그만이기 때문이다.

따라서 큐 배열을 선언하고 b를 순회하면서, b값에 해당하는 큐에 0부터 n-1까지 인덱스를 넣어주면된다.

```cpp
// 큐 배열의 길이는 a의 최댓값 + 1
queue<int>* q = new queue<int>[*max_element(a, a + n) + 1];

for (int i = 0; i < n; i++)
	q[b[i]].push(i);
```

마지막으로 a를 순회하면서, a값에 해당하는 큐를 pop하면, 해당 값이 정렬된 상태로 있어야할 때의 인덱스가 출력된다.

```cpp
for (int i = 0; i < n; i++) {
	cout << q[a[i]].front() << ' ';
	q[a[i]].pop();
}
cout << endl;
```

파이썬으로 풀어보자, `b = a`로 얕은 복사를 해버리면 b를 정렬했을 떄 a 또한 정렬되기 때문에 `copy.deepcopy()`를 써줘야한다, 아니면 이 경우에는 `b = a[:]`로 리스트의 슬라이싱을 이용하면 된다. 얕은/깊은 복사에 대해 더 자세히 정리한 내용은 다음 [링크](/Python/mutable.html)를 참고하자. 리스트의 리스트를 큐 배열로 사용하기 위해 다음과 같이 선언해줬고 이후 과정은 동일하다.

```python
import copy

n = int(input())

a = list(map(int, input().split()))
b = copy.deepcopy(a)

b.sort()

q = []

for i in range(max(a) + 1):
    q.append([])

for i in range(n):
    q[b[i]].append(i)
    
for i in range(n):
    print(q[a[i]].pop(0), end=' ')
print()
```

### TODO.
~~~
ㅇ BJ/1015

[ ] 파이썬 shallow/deep copy 정리하기
ㄴ https://wikidocs.net/16038
[ ] 파이썬 리스트의 리스트 정리하기
ㄴ https://thispointer.com/how-to-create-and-initialize-a-list-of-lists-in-python/
~~~
