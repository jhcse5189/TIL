# Binary Search

이분탐색, `O(log N)`의 시간복잡도를 갖는 탐색 알고리즘이다. 데이터가 정렬되어 있다는 가정 하, 탐색하는 데이터의 범위를 절반씩 줄인다. 배열에서 특정한 데이터의 인덱스, 존재 유무를 알 수 있는데 PS에서는 Parametric Search, DP 등과 응용되어 출제된다. End point에서 장난질하거나 다양한 섬세한 요구를 하면 까다로워 지는데, 정말 싫다!

## Example.
~~~
/* 문제를 풀어보고 아래 접근을 참고할 것 */

[o] 백준 1920번, 수 찾기
[o] 백준 2805번, 나무 자르기
[o] 백준 2512번, 예산
[o] 백준 1072번, 게임

[o] 백준 7795번, Eat or Be Eaten

[o] 백준 19599번, 이진 삼진 탐색 놀이 1

[ ] 기출문제 1, 정렬된 배열에서 특정 수의 개수 구하기 (Zoho 인터뷰)
[ ] 기출문제 2, 고정점 찾기 (Amazon 인터뷰)
[ ] 백준 2110번, 공유기 설치
[ ] 기출문제 3, 가사 검색 (2020 Kakao 신입 공채 1차)
~~~

### # 백준 1072번, 게임

아직 이해가 되지 않는다... 아직 C에서 어떨 때 정수형 데이터는 실수로 받고,
이를 그대로 받든 문제에서 원하는 스택대로 데이터 손실을 시키든 정확하게 변환하는 방법 말이다.

```cpp

```

### # 백준 7795번, Eat or Be Eaten

임의의 중복이 있는 정수 배열 2개에 대해 비교한다고 직관적으로 생각이 들었는데 계속 새로운 유형의 문제에서 이진탐색을 떠올릴 수 있을까 모르겠다.

가장 단순한 방법으로 접근하면, N개의 배열을 순회하면서 M개의 값과 비교하여 총 개수를 증가시킬 수 있겠다. 이렇게 풀어버리면 O(NM)의 시간복잡도를 갖는데 둘 다 범위가 2만개 이하라서 최악의 경우 4억번의 연산이 필요하며 문제 입력에서는 테스트 케이스 수까지 받아서 시간초과가 뜰 것이다.

그래서 일단 정렬을 해봤는데, 그러면 그냥 N개를 순회하면서 M개의 배열에 이진탐색을 진행하여 뱉어내는 인덱스 값을 바탕으로 총 개수를 갱신시키면 되겠다 싶었다. 배열 이름은 각각 a와 b로 두겠다. 일단 배열 a의 값이 b의 최댓값보다 크다면 총 개수에 M개를 더하기만 하면 된다.

```cpp
if (a[j] > bMax) {
	result += m;
	continue;
}
```

그렇지 않다면 시작점과 끝점의 인덱스를 `0`, `m - 1`로 잡고 이진탐색을 진행하는데, 처음에는 반복문 조건이랑 끝점을 옮기는 부분에서 디테일이 필요할 줄 알았는데, 그렇게 해도 맞았고 그냥 기본적인 parametric search 하듯이 짜도 정답을 찾아간다. a의 값이 b[mid] 값보다 작거나 같다면 r를 mid까지 옮기고 제외한 범위에는 답이 존재하지 않는다. a가 b[mid]보다 크면 그 때마다 저장해주면 끝난다.

```cpp
int ans = -1;

while (l < r) {

	int mid = (l + r) / 2;

	if (a[j] <= b[mid]) {
		r = mid;
	} else {
		l = mid + 1;
		ans = mid;
	}
}

if (ans != -1)
	result += ans + 1;
```

저장한 인덱스 값이 0일 수도 있으니, 인덱스에 1을 더한 값을 총 개수에 저장하도록 하고, 만약 한 번도 a가 b[mid]보다 크지 않은 경우에는 총 개수에는 더할 값이 없다. 파이썬으로는 일반적인 이진탐색으로 짜보고 제출했는데 문제없다!

```python
ans = -1

while l <= r:

	mid = (l + r) // 2

	if a[j] <= b[mid]:
		r = mid - 1

	else:
		l = mid + 1
		ans = mid

if ans != -1:
	result += ans + 1
```

## Ref.
~~~
이것이 코딩 테스트다 with 파이썬 - 나동빈
~~~