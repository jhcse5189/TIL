# Greedy Algorithm

욕심쟁이 알고리즘, 탐욕법이라고도 한다. 현재 순간에서 가장 최적의 방법이 곧 문제의 해답이 되는 유형이다. 특정한 알고리즘을 외워서 푸는 방식이 아니라 접근은 누구나 해볼만 하지만 그만큼 창의적인 방식을 도출해내야 하기 때문에 어렵다면 정말 어려울 수 있고 다익스트라나 정렬 알고리즘과 섞여서 출제되거나 DP랑 구분이 필요할 수도 있다. 그렇기 때문에 정말 많은 그리디를 풀어봐야 어느 정도 감이 오지 않을까 싶다.

중요한 건 빠르게 해당 문제의 가능한 최소의 케이스에서 방법을 찾아야하며 그 방법이 문제 전체 케이스에 적용할 떄 해답이 되는지 검증할 수 있어야한다. 아마 이런 문제를 풀면서 맞왜틀왜맞 거리는 경우가 허다하지 않을까.

대표적인 예시는 거스름돈 문제다. N원을 거슬러 줘야할 떄 K개의 동전 종류로 개수를 최소화하면서 거슬러 줄 수 있는 방법을 생각해보자. 이 떄 K개의 동전이 서로 배수 관계에 있다면 O(K)의 시간복잡도를 가져서 그리디로 바로 풀리고 해당 관계로 검증까지 하면 된다. 만약 동전 간에 서로 배수 관계가 성립하지 않는 경우에는 DP로 접근하면된다.

## Example.
~~~
/* 문제를 풀어보고 아래 접근을 참고할 것 */

[o] 백준 1931번, 회의실 배정
[o] 백준 1541번, 잃어버린 괄호
[o] 백준 5585번, 거스름돈
[ ] 실전문제 1, 큰 수의 법칙
~~~

### # 백준 1931번, 회의실 배정

책에 문제를 풀기도 전에 1931번 회의실 배정을 풀어버렸다. 사실 예제 입력에서 답을 찾아버렸지만 당연히(?) "가장 빨리 끝나는 회의를 계속해서 이어가면" 가장 많이 회의실을 사용할 수 있지 않을까 싶었다. 예제가 벌써 정렬이 되어있어서도 그렇지만 일단 작대기로 그림을 그려봤다.

이것을 어떤 식으로 생각해야 검증까지 되었다고 말할 수 있을까. 

'가장 빨리 끝나는 회의가 첫번쨰 회의가 안된다면?'

시작 시각이 a이고 끝나는 시각이 b인 회의가 첫번째 회의의 후보가 된다고 치자. 단, b는 모든 N개의 회의 중에서 가장 빨리 끝나는 시각이다. 그렇다면 a와 b를 사이에 겹치게 되는 회의 중에서 첫번쨰 회의가 될만한 게 있을까? a와 b가 동일한 회의나 그 사이에서 시작하고 끝나는 회의가 없지 않은 이상, a와 b 사이에서 끝나거나 시작하기만 하는 회의는 절대 첫번쨰 회의가 될 수 없다. 

```cpp
sort(v.begin(), v.end(), cmp);

int start = 0;
int out = 0;

for (auto i : v)
{
	if (start <= i.first)
	{
		start = i.second;
		out++;
	}
}
```

따라서 끝나는 시각을 우선으로 정렬한 다음, 시작 시각도 오름차순으로 정렬해주고 순회하면 O(N) linear time 안에 문제는 풀린다. (비교 함수를 처음에 잘못 만들어서 88퍼에서 틀렸다고 떴었다)

```cpp
bool cmp(pair<int, int> a, pair<int, int> b)
{
    if (a.second < b.second)
        return true;

    else if ((a.second == b.second) && (a.first <= b.first))
        return true;

    else
        return false;
}
```


### # 백준 1541번, 잃어버린 괄호

양수와 덧셈, 그리고 뺄셈 기호만 있는 식이 주어질 떄 괄호를 쳐서 식의 값을 최소로 만들고 싶어한다. 최소값만 구하면 되기 때문에 굳이 특정 위치에 실제로 괄호를 칠 필요가 없다. 내가 떠올린 방식은 '+'가 나온 상태를 시작으로 계속 양수를 더하다가 '-'가 나오는 시점부터는 어떤 operator가 나와도 계속 합계에 음수를 더하는 것이다. '-'가 있으면 뒤에 '-'가 있으면 괄호를 쓰지 않고도 하나의 operand 당 합계가 줄어들고 '+'가 있어도 괄호를 쳤다고 가정하여 두 개 이상의 operand를 더한 값을 합계에서 빼는 게 되므로 최소값이 나올 수 밖에 없다.

```cpp
for (int i = 0; i < s.size(); i++)
{
	// meet operator
	if (s[i] == '-')
	{
		out += state_addition(stoi(s.substr(a, i - a)), state);
		a = i + 1;

		state = 0;
	}

	else if (s[i] == '+')
	{
		out += state_addition(stoi(s.substr(a, i - a)), state);
		a = i + 1;
	}

	// string-end case
	if (i == s.size() - 1)
		out += state_addition(stoi(s.substr(a, i - a + 1)), state);
}
```

### # 백준 5585번, 거스름돈

가장 기초적인 그리디 문제다. 동전 개수가 가장 적게 거스름돈을 줄 때는 **모든 동전이 서로 배수 관계일 때** '가장 큰 돈부터 줄 수 있는 만큼 주면' 된다. 해당 전제에서 큰 화폐의 동전 하나는 무조건 하위 화폐에서 가치가 동일하려면 2개 이상의 동전이 필요하기 때문에 해당 방식이 검증되는 것이다. 

```cpp
int coin[6] = {500, 100, 50, 10, 5, 1};

int number_of_coins = 0;

for (int i = 0; i < 6; i++)
{
	number_of_coins += n / coin[i];
	n %= coin[i];
}
```

### # 실전문제 1, 큰 수의 법칙



## Ref.
~~~
이것이 코딩 테스트다 with 파이썬 - 나동빈
~~~