import { Col, Row } from "antd";

export default function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: "bold",
          }}
        >
          Sungbin Blog
        </h1>
        <p
          style={{
            fontSize: 24,
          }}
        >
          모든 것을 즐길 줄 아는 개발자, 양성빈입니다. 개발을 접해보기 전부터
          몰입하는 즐거움을 따라 살다가, 지금은 개발에 푹 빠져 있습니다. 항상
          무언가를 배우는데 있어서 매일 같이 꾸준히 공부를 하고 있습니다. Clean
          Code와 TDD에 대한 생각을 습관화 하고 있습니다. 커피☕️ 를 좋아하며
          함께 발전해나가는 것을 즐겨합니다.
        </p>
      </Col>
    </Row>
  );
}
