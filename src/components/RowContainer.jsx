const Card = ({ image, para, title, author }) => {
  return (
    <div className="cardnews">
      <div className="imgcard">
        <img src={image} alt="" />
      </div>
      <div className="post">
        <p className="blue">{para}</p>
        <h4>{title}</h4>
        <p className="gray">{author}</p>
      </div>
    </div>
  );
};

const RowContainer = ({ news }) => {
  return (
    <div className="rowcontainer">
      <div className="container">
        {news.slice(0, 4).map((medee) => (
          <Card
            key={medee.title}
            image={medee.image}
            title={medee.title}
            para={medee.para}
            author={medee.author}
          />
        ))}

        <img
          src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/bfe643d1-36ba-4da7-8217-521d83e28491.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241219%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241219T122212Z&X-Goog-Expires=86399&X-Goog-Signature=34285f4678149de738e8212a8f8ff32c2bf65382cdfd4e172cf49608fbdce5c212b1bd456082f631c2aba83c1ad40f19a40b897e2e8220ae6f941d2e5f270215fce63514516e0e9ee293a49780d5741401fcdd51d47a03019c55b3f97ca3c34cea727091d313937f89a4ca5997030795061b6488422265db58ad130a46b19e733623540595fd5e40041d32f37c4249fc30683c9944ce0682006de18f0b5ebf756398ae7f3dbdcc596a1b5e7c93efee56f68290980b73fd00dccc3d27170c33298edbba9019f2a08c3904a9a164c1667f39a898178797a856d972affea31ebdeeb21f3f279b6c289f05b3a2829528a95e828197240f2f2e2c4760603bec7c2738&X-Goog-SignedHeaders=host"
          alt=""
          style={{
            width: "100%",
            maxWidth: "780px",
            aspectRatio: "780/126",
            marginBottom: "22px",
          }}
        />

        {news.slice(4, 8).map((medee) => (
          <Card
            key={medee.title}
            image={medee.image}
            title={medee.title}
            para={medee.para}
            author={medee.author}
          />
        ))}

        <div
          style={{
            display: "flex",
            fontWeight: "700",
            maxWidth: "780px",
            width: "100%",
            padding: "7px 20px 6px",
            justifyContent: "center",
            backgroundColor: "#f5f8fc",
          }}
        >
          Илүү үзэх
        </div>
      </div>
      <div className="images">
        <div
          style={{
            maxWidth: "380px",
            aspectRatio: 380 / 265,
          }}
        >
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/757aa5b9-0e51-440e-96c4-a159059bc841.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241218%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241218T132425Z&X-Goog-Expires=86399&X-Goog-Signature=263f87aa9127ca098fb3909b542815d8665421a336ec57b60729fc7041a3bfac016d68843caf2c94b8abac12fa13bb4fb63480a03d4f12c8497849e7b67b59ef2bfc9680903cd2e265b67269e66af6f51440301720402306e8f9ce06d683789f1775c1e1a40836ee066b4b95165ebcfdc1cef9f62234db9bb2ce898360a050d36fb8dd20eb1c1a47b97844baa1928dd40ded73a159d9d580c05cf22bee753a14f45e1129d7d344b96a5b5464f90b87468b708438d1cd236acbef650baed46a0cb3a0fd81f09131a1094566a27a04ab58c9c2413b31416baf5185f3db0b291fbe281e6d3d08ea5bc5436d32ce0a845d590839e7532cda0211b4452ab59ed8ddb8&X-Goog-SignedHeaders=host"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div
          style={{
            maxWidth: "380px",
            aspectRatio: 380 / 500,
          }}
        >
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/4393e679-2224-4da3-967f-1dfe64500f90.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241218%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241218T132425Z&X-Goog-Expires=86399&X-Goog-Signature=5ecd6d30bb3b0daf970a1b91c59c9c0aadd2d68c6dad16a388a02992fb55ffd4d2295f45c8a82b376f650b17d8abab6dc66d7de3cb2902f9ee2830534fc340f049dcf5108eb553fd4f47374787251897c38ab75f77b8532c84c2257f96b8d9d3b59ab7aea2a3e41a1563ee604793835ef70776c5c91fc732866c5498e1920d460946bab76bf5ff244bb8304b9cfab839ac17c1bf7e7f8a23a37f11fa6f32cfd533a1385e1f4039bb62ddae7278786109ed6ffed977571de72b552b20eb6e31e9591433922ae8dd54372eae6dfba511614800bb70ad668683afbfcf5a61f2ae8ede50db3d3a3950b695a4cec815b03c378063b571e390b0cf8f795b4cc6231426&X-Goog-SignedHeaders=host"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
