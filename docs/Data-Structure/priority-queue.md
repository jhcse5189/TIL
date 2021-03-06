# Priority Queue

대충 key를 넣을 떄마다 가장 큰 값만 뽑아주게 max heap을 유지하게 만들어주면서 돌리면.. 시간초과로 PS시 터져버린다. 뭘까. C++ STL를 안써서 그냥 망하는건가, 내가 클래스로 짠 heap에 무슨 문제가 있나 봤더니 PQ 문제다. ... 뭐가 다를까, heap에서 어떤 메소드만 구현해놓은 PQ가 될까.

정말 한글이 짜세(?)다. 참고한 네이버 블로그를 적어 놓는다. 우선순위 큐, 자료구조 중 하나다. 이 칭구는 어떤 연산을 지원해줘야하나?

지원해야만 하는 연산은 생각해보면 별로 없다. 빈 PQ가 있다고 생각하고 큐의 push, top, pop만 효율적으로 수행할 수 있도록 하면 된다.

key를 push하는 과정을 생각해보자. heap_size를 증가시키고 pq[heap_size] = key가 들어간다. 그러면 새로운 key로 인해 pq는 max_heap이 아니게 될 수 있, 어렵게 말하지 말고 위반할 수 있다. 그러면 최대 root 노드까지 **heapify를 통해 제 자리를 찾아주어 heap을 유지시켜주면 될 것이다. (틀렸다, 밑에서 위로 올라가려면 increase_key 메서드를 따로 만들어줘야한다.)** 아마 O(lg n)의 시간복잡도가 나올 것 같다.

Maximum을 pop하는 과정도 상상해보자. max_heap이 유지된 상태에서 pq[1]에 가장 큰 값이 있다. pop되면서 heap_size가 감소하므로 heap의 배열에서 마지막 key를 pq[1]로 올리고 이 칭구를 heapify하여 자기 자리를 찾아주면 된다. 역시 pop도 O(lg n)의 시간복잡도를 갖지 않을까.

문제에서 최대 10만개 들어오는데 **똑바로 구현하면(원서 대충 읽고 안써보고 이래서 11279번 디버깅하는데 너무 오래걸렸다.)** 1초만에 될텐데... 일단 맞고 생각하자. 맞고, 이전 제출에서는 왜 안됐는지, C++ 라이브러리를 쓰면 을매나 편할런지 만들어보자.

굳이 heap을 가지고 sort를 하는 게 아니기 때문에 힙 프로퍼티만 지킨다는 생각으로 짜야지 삽입/삭제 둘 다 로그n 타임이 나온다. increase_key에서 부등호 범위 떄문에 (x >= 1) 1을 포함해버려서 힙을 출력하는데 중간에 0이 끼여있고 막 그랬다.

## Implementation

어차피 C++ queue에서 `priority_queue` STL 쓸건데 

## Double-Ended?

7662번을 보고 순간 드는 생각, ... 그냥 힙 2개를 만들면? 아니 1개로 만들 수 있는 방법이 있지 않을까 100만개가 들어오는데 시간도 6초나 주고... 뭐지. 일단 2개를 만들어서 맞추고 생각하자. 찾아보니까 self balancing BST를 써서도 만들 수 있다고 하는데 그건 알고리즘 책 인쇄해놓은 BST 마저 다 읽고 그냥 BST 관련 문제들 좀 풀어보고 도전해보자.

### Ref.

~~~
https://m.blog.naver.com/kks227/220791188929
~~~
