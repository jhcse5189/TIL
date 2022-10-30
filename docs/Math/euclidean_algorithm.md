# 유클리드 호제법

~~~
- BJ/9613 Sum of GCD
~~~

정수 a와 b의 최대공약수를 구하려면 어떻게 해야할까. 코드포스에서 `coprime` 관련 문제 풀다가 찾아봤다. (참고로 쓰면서 깨달았는데 coprime은 `서로소`이다.)

영문으로는 `Euclidean Algorithm`으로 알려진 유클리드 호제법에서 막(?) 좋은 그거는 '호재'고 `서로 나눈다는` 뜻에서 '호제'법이라고 한다.

기가막히게도 1071, 1029의 최대공약수를 구하려면 연산 두세번만에 21이라는 것을 구할 수 있다.

~~~
(1071, 1029) = (1029, 42)
             = (42, 21)
             = (21, 0)
             = 21
~~~

## Lemma.

> a = bq + r 이면, gcd(a, b) = gcd(b, r) 이다.

## Proof.

a, b가 0보다 큰 정수이고 a는 b보다 같거나 클 때, `a = bq + r` 을 만족하는 유일한 정수 b, r이 존재한다. 여기서 b는 1 이상이고, r는 0 이상 b 미만일 것이다.

최대공약수 (a, b) = d 일 때,

a = dα, b = dβ 라고 하자.

이 때 α, β은 coprime이다.

`a = bq + r` 에서
dα = dβq + r
dα - dβq = r

∴ r = d(α - βq), b = dβ 이다.

이 때 r과 b는 공약수 d를 갖는데, (α - βq)와 β가 coprime이면 (a, b) = (b, r)이 성립한다.

만약 α - βq = mt, β = nt가 1 보다 큰 정수 t를 최대공약수로 갖는다고 가정하자.

α - βq = α - (nt)q  = mt

∴ α = mt + ntq = t(m + nq), b = tn 이므로 앞의 가정과 모순되므로 Proof by contradiction (귀류법에 의해서 증명).

## Ref.

- David Burton. (2010). Elementary Number Theory; 7th editon (pp. 26-27). n.p.: McGraw Hill.
 
- https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95

- https://sseong40.tistory.com/3
