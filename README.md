## Wash Korea Project

[데모 영상](https://drive.google.com/file/d/1BbsvlZo2QaIZrlAps9iEAxLlXMc7TCYO/view?usp=sharing)
[웹 사이트](http://13.58.93.116:8000)

### [팀명] : Wash Korea(워시 코리아)

- 러쉬코리아(https:/lush.co.kr/) 클론 프로젝트
- 짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 위 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 프로젝트 선정이유

- 기본적인 커머스 사이트에 필요한 핵심 기능들을 구현해 볼 수 있어서 선택하게 되었습니다.

### 개발 인원 및 기간

- 개발기간 : 2021/11/1 ~ 2021/11/12
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
- 팀원 : 권은경, 박보라, 석예주, 이수경, 허규빈
- [프론트 github 링크](https://github.com/wecode-bootcamp-korea/26-1st-WASH-Korea-frontend)
- [백 github 링크](https://github.com/wecode-bootcamp-korea/26-1st-WASH-Korea-backend)

<br>

## 적용 기술 및 구현 기능

### 적용 기술

> - Front-End : JavaScript, React.js, sass, React-router-dom, React-icons, DOMpurify, AWS(EC2)
> - Back-End : Django, Python, MySQL, jwt, bcrypt, AWS(EC2, RDS)
> - Common : Git, Github, Slack, Trello, dbdiagram, postman

### 구현 기능

박보라
> Navigation Bar

마우스 이벤트 발생 시 드롭다운<br>
메뉴 클릭 시카테고리 페이지로 이동 

> ProductDetailPage

  - 적절한 컴포넌트화로 가독성 높임
  - 상단 카테고리 필터링 기능을 통해 카테코리 click시 
    해당 페이지로 이동 기능 구현
  - 구매 수량 버튼 ( - / + )클릭시 수량 반영 및 수량에 따른 
     가격 변동 기능 구현
  - Back-end에서 넘겨받은 API 주소를 Path Parameter를
    이용하여 특정 상품 클릭시 ProductDetailPage로 이동 
    기능 구현
  - 리뷰 기능 headers에 token을 가져와서 인증된 사용자만
     리뷰를 작성할 수 있도록 구현
  - 리뷰 기능 POST/GET 방식을 활용하여 리뷰를 작성하고
     버튼을 클릭 했을 때 작성한 리뷰 노출 기능 구현
  - Git의 workflow를 익히고, 협업하는 기술
  - Git을 통한 협업 과정에서 발생하는 Conflict 해결 능력
<br>

## Reference

- 이 프로젝트는 [러쉬](https://lush.co.kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
