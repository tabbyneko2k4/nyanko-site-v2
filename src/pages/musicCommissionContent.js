export const commissionContent = {
  en: {
    pageTitle: { main: "MUSIC", highlight: "COMMISSIONS" },
    intro:
      "Need unique background music for your project, game, or stream? Or perhaps a specific arrangement? Let's create something amazing together!",
    buttons: {
      trello: "Work Progress",
      fiverr: "Fiverr Profile",
      viewSamples: "View All Samples",
      switchLang: "Tiếng Việt",
      viewDetails: "View Details",
    },
    sections: {
      samples: "Samples",
      workflow: "Project Workflow",
      pricing: "Pricing",
      tos: "Terms of Service",
      faq: "Frequently Asked Questions (FAQ)",
    },
    workflow: {
      // Nội dung mới
      title: "How It Works",
      intro:
        "This is our standard workflow to ensure transparency and efficiency for both parties. Please review the steps before submitting your request.",
      formButton: {
        text: "Fill Out Commission Form",
        url: "https://forms.gle/bsrJuRqvSrMCZhtu8",
      },
      stages: [
        {
          title: "Phase 1: Before We Start",
          points: [
            "**Preparation:** Prepare all relevant documents and references for your order.",
            "**Submission:** Fill out and submit the official Commission Form. Ensure any shared links (Google Drive, etc.) are set to 'Anyone with the link can view'.",
            "**Confirmation & Quote:** You will receive a confirmation email with a price quote from the Studio within 3 days.",
            "**Deposit:** A deposit is required within 2 days to secure your slot. **Standard:** 50% of the total value. **New VTubers (<6 months):** 20% of the total value.",
            "**Priority Service:** Rush orders are available for an additional fee (e.g., 1.5x for 21 days, 2.0x for 14 days).",
            "**Communication Setup:** Once the deposit is confirmed, we will create a dedicated Google Chat Space for all project communications.",
          ],
        },
        {
          title: "Phase 2: During The Project",
          points: [
            "**Communication:** All project-related discussions must take place exclusively within the Google Chat Space.",
            "**Updates:** You will receive two major progress updates: the first at 50% completion (within 30% of the total timeframe) and the second at 100% completion (within 80% of the timeframe).",
            "**Feedback:** Prompt feedback is crucial. If there is no response from the client within 3 days, the Studio reserves the right to terminate the project.",
            "**Revisions:** You receive 3 free minor revisions after the final draft is delivered. Major changes may incur additional fees.",
            "**Confidentiality (NDA):** You can request a Non-Disclosure Agreement (NDA) for an additional fee of 10% of the total order value.",
          ],
        },
        {
          title: "Phase 3: After Completion",
          points: [
            "**Final Payment:** Once you approve the final product, the remaining balance must be paid.",
            "**Delivery:** The Studio will deliver all final files via a Google Drive link after the final payment is confirmed.",
            "**Warranty & Storage:** The product includes a 30-day warranty. All files will be stored on our Google Drive for 20 days. Please download your files before this period ends.",
            "**Credit:** You must provide proper credit to the creator in the description when using the product on social media, streams, etc.",
            "**Studio's Rights:** The Studio reserves the right to use the final product for promotional purposes (portfolio, social media) unless an NDA is in place.",
          ],
        },
      ],
    },
    pricing: {
      compareButton: "Compare Tiers",
      compareTitle: "Tier Comparison",
      tierLabel: "Feature",
      tiers: [
        {
          name: "Tier 1",
          usd: "USD 30",
          vnd: "VND 400.000",
          features: [
            "Up to 60 seconds",
            "Basic genres like Lo-fi, Piano",
            "Ideal for Intros, Outros, BGM",
          ],
          details: {
            genre: "Lo-fi, Piano, Chiptune",
            duration: "Up to 60 seconds",
            useCase: "Intro, Outro, BGM",
            structure: "1 Intro - 1 Buildup (optional) - 1 Drop",
            mood: "Please specify the desired mood (e.g., cute, cheerful, sad, mysterious, epic...)",
            loop: "Yes",
            additionalSounds: "Yes",
            excludeSounds: "Yes",
            stemRequest: "+5%–10% fee",
            projectFileRequest: "FLP (+200%)",
            references: "YouTube / Soundcloud / Audio files (max 3)",
          },
        },
        {
          name: "Tier 2",
          usd: "USD 50",
          vnd: "VND 800.000",
          features: [
            "Up to 150 seconds",
            "Wider genre selection",
            "More complex arrangements",
          ],
          details: {
            genre:
              "Lo-fi, Piano (Full), Trap, Chiptune, Kawaii Bass, Future Bass, Happy Hardcore, Orchestra, Others",
            duration: "Up to 150 seconds",
            useCase: "Intro, Outro, BGM",
            structure: "1 Intro - 1 Buildup (optional) - 1 Drop",
            mood: "Please specify the desired mood (e.g., cute, cheerful, sad, mysterious, epic...)",
            loop: "Yes",
            additionalSounds: "Yes",
            excludeSounds: "Yes",
            stemRequest: "+5%–10% fee",
            projectFileRequest: "FLP (+200%)",
            references: "YouTube / Soundcloud / Audio files (max 3)",
          },
        },
        {
          name: "Tier 3",
          usd: "From USD 100",
          vnd: "From VND 1.500.000",
          features: [
            "Up to 300 seconds",
            "Custom structure",
            "Highest priority & detail",
          ],
          details: {
            genre:
              "Lo-fi, Piano (Full), Trap, Chiptune, Kawaii Bass, Future Bass, Happy Hardcore, Orchestra, Others",
            duration: "Up to 300 seconds",
            useCase: "Intro, Outro, BGM",
            structure: "Customizable and negotiable based on needs",
            mood: "Please specify the desired mood (e.g., cute, cheerful, sad, mysterious, epic...)",
            loop: "Yes",
            additionalSounds: "Yes",
            excludeSounds: "Yes",
            stemRequest: "+5%–10% fee",
            projectFileRequest: "FLP (+200%)",
            references: "YouTube / Soundcloud / Audio files (max 3)",
          },
        },
      ],
      detailLabels: {
        genre: "Music Genres",
        duration: "Duration (seconds)",
        useCase: "Use Case",
        structure: "Structure",
        mood: "Mood",
        loop: "Loopable",
        additionalSounds: "Include Specific Sounds",
        excludeSounds: "Exclude Specific Sounds",
        stemRequest: "Stem Files Request",
        projectFileRequest: "Project File Request",
        references: "References",
      },
      note: "Prices are estimates and may vary based on complexity. Contact for a specific quote.",
    },
    tos: {
      intro:
        "*Please ensure you have accepted these terms before placing an order.*",
      sections: [
        {
          title: "A. Regulations",
          points: [
            "Under no circumstances is the client permitted to use any part of the product delivered by the Studio for NFT purposes or as a resource/reference for creating products using AI software and generators.",
            "The Studio does not permit the use of any part of the product for pornographic, political, religious, hostile, or discriminatory purposes. We reserve the right to refuse service if the client's intentions involve such content.",
          ],
        },
        {
          title: "B. Delivery and Usage",
          points: [
            "The complete product will be delivered to the client upon completion. Delivery will include the original quality audio file (WAV), a compressed audio file (MP3), and the project file (FLP) if requested.",
            "After delivery, the product may not be altered by the client or a third party without written consent from the Studio. The client may not transfer or resell the product.",
            "The intellectual property of the delivered product remains with the Studio. The Studio reserves the right to use these products for promotional purposes.",
            "After delivery, the client may use the products according to the following Commercial Licenses:",
            "**Basic Commercial License (Free):**\n- The client may use the delivered product for posting on social media platforms.\n- Use the product for livestreams or in non-profit videos.\n- When using the product, the client must credit the creator.",
            "**Commercial License 2 (+100% of product value):** Includes all rights from the Basic Commercial License, plus the following:\n- Broadcasting at for-profit events.\n- Production of digital goods: Patreon, Memberships, or any digital exchange platform.\n- Distribution on music streaming platforms (Spotify, Apple Music, etc.).\n- Production of physical goods: CDs, Vinyl, etc.",
          ],
        },
        {
          title: "C. Confidentiality",
          points: [
            "The Studio confirms and commits that all information provided by the client will be treated as confidential and will not be disclosed publicly. All parties are obligated to keep this information private and use it only for archival purposes.",
            "The Studio reserves the right to share project progress on social media platforms or livestreams unless the client requests a Non-Disclosure Agreement (NDA).",
          ],
        },
        {
          title: "D. Termination and Refund",
          points: [
            "Both the Studio and the client may terminate the agreement at any time by providing written notice to the other party.",
            "Upon termination, payment and product delivery will be handled as follows:\n- Before project start: The Studio will refund 100% of the deposit paid by the client.\n- After project start and before the first update: The Studio will not refund the deposit and will send the product in its current state of progress.\n- At the second update: The client must pay the remaining balance to the Studio, and the Studio will send the product in its current state of progress with no further support.",
          ],
        },
      ],
    },
    faq: [
      {
        q: "What payment methods do you accept?",
        a: "We accept Bank Transfer, Momo, Viettel Pay, Zalo Pay (within Vietnam) and PayPal (for international clients with USD).",
      },
      {
        q: "Can I request revisions?",
        a: "Yes, a reasonable number of minor revisions are included in the price to ensure you are happy with the final product. Major changes requested after the initial direction has been approved may incur additional fees.",
      },
      {
        q: "What can I use the music for? Is commercial use included?",
        a: "A 'Basic Commercial License' is included for free with every commission. This allows you to use the music on social media, for livestreams, or in non-profit videos, provided you give credit. For uses like distributing on Spotify, for-profit events, or selling physical products (CDs, Vinyl), you will need to purchase the 'Commercial License 2' for an additional fee. Please see Section B of our Terms of Service for full details.",
      },
      {
        q: "Who owns the copyright to the music?",
        a: "The Studio retains the full intellectual property rights to the composition. When you commission a piece, you are purchasing a license to use it according to the agreed-upon terms. We also reserve the right to use the music for our own promotional purposes (e.g., in our portfolio).",
      },
      {
        q: "What is your refund policy? Can I cancel my order?",
        a: "Yes, you can cancel an order. Our refund policy is based on the project's progress: a 100% refund is available if we haven't started. If work has begun, the deposit is non-refundable. Please refer to Section D of our Terms of Service for a detailed breakdown.",
      },
      {
        q: "Will my project be kept confidential?",
        a: "Your personal information is always kept confidential. However, we reserve the right to share progress of the work (e.g., clips, screenshots) on social media. If your project requires complete secrecy, please request a Non-Disclosure Agreement (NDA) before we begin.",
      },
      {
        q: "What file formats will I receive?",
        a: "Upon completion, you will receive the final track in high-quality WAV and compressed MP3 formats. The project file (FLP) can also be delivered if it's part of your commission agreement.",
      },
      {
        q: "Are there any types of projects you don't accept?",
        a: "Yes. We do not accept any commissions intended for use with NFTs or for training AI models. We also reserve the right to refuse projects with pornographic, political, religious, hateful, or discriminatory themes.",
      },
    ],
  },
  vi: {
    pageTitle: { main: "NHẬN", highlight: "ĐẶT NHẠC" },
    intro:
      "Bạn cần nhạc nền độc đáo cho dự án, game, hay stream? Hay một bản phối cụ thể? Hãy cùng tạo ra điều gì đó tuyệt vời nhé!",
    buttons: {
      trello: "Tiến độ công việc",
      fiverr: "Hồ sơ Fiverr",
      viewSamples: "Xem tất cả sản phẩm mẫu",
      switchLang: "English",
      viewDetails: "Xem chi tiết",
    },
    sections: {
      samples: "Sản phẩm mẫu",
      workflow: "Quy trình thực hiện dự án",
      pricing: "Bảng giá",
      tos: "Điều khoản dịch vụ",
      faq: "Câu hỏi thường gặp (FAQ)",
    },
    workflow: {
      // Nội dung mới
      title: "Quy trình làm việc",
      intro:
        "Đây là quy trình làm việc tiêu chuẩn của chúng tôi để đảm bảo sự minh bạch và hiệu quả cho cả hai bên. Vui lòng xem qua các bước trước khi gửi yêu cầu.",
      formButton: {
        text: "Điền form đặt hàng",
        url: "https://forms.gle/bsrJuRqvSrMCZhtu8",
      },
      stages: [
        {
          title: "Giai đoạn 1: Trước khi bắt đầu dự án",
          points: [
            "**Chuẩn bị:** Chuẩn bị đầy đủ tài liệu liên quan đến đơn hàng của bạn.",
            "**Gửi yêu cầu:** Điền và gửi form đặt hàng chính thức. Đảm bảo các liên kết chia sẻ (Google Drive,...) được đặt ở trạng thái 'Bất kỳ ai có đường liên kết' với chế độ 'Người xem'.",
            "**Xác nhận & báo giá:** Bạn sẽ nhận được email xác nhận và báo giá từ Studio trong vòng 3 ngày.",
            "**Đặt cọc:** Cần đặt cọc trong vòng 2 ngày để giữ chỗ. **Khách hàng thường:** 50% giá trị đơn hàng. **VTuber mới (<6 tháng):** 20% giá trị đơn hàng.",
            "**Dịch vụ ưu tiên:** Có thể yêu cầu làm hỏa tốc với phụ phí (ví dụ: x1.5 cho 21 ngày, x2.0 cho 14 ngày).",
            "**Thiết lập liên lạc:** Sau khi xác nhận cọc, Studio sẽ tạo một Google Chat Space riêng cho dự án để hai bên trao đổi.",
          ],
        },
        {
          title: "Giai đoạn 2: Trong quá trình thực hiện dự án",
          points: [
            "**Giao tiếp:** Mọi thông tin trao đổi liên quan đến dự án sẽ chỉ được thực hiện qua Google Chat Space.",
            "**Cập nhật:** Bạn sẽ nhận được 2 lần cập nhật tiến độ chính: lần đầu khi đạt 50% công việc (trong 30% tổng thời gian) và lần hai khi hoàn thành 100% (trong 80% tổng thời gian).",
            "**Phản hồi:** Phản hồi kịp thời là rất quan trọng. Nếu khách hàng không phản hồi trong vòng 3 ngày, Studio có quyền chấm dứt dự án.",
            "**Chỉnh sửa:** Bạn sẽ có 3 lần chỉnh sửa nhỏ miễn phí sau khi sản phẩm được bàn giao. Những thay đổi lớn có thể phát sinh thêm chi phí.",
            "**Thỏa thuận bảo mật (NDA):** Bạn có thể yêu cầu ký NDA với mức phí là 10% tổng giá trị đơn hàng.",
          ],
        },
        {
          title: "Giai đoạn 3: Sau khi hoàn thành dự án",
          points: [
            "**Thanh toán cuối:** Sau khi bạn đã đồng thuận về sản phẩm cuối cùng, vui lòng thanh toán phần còn lại.",
            "**Bàn giao:** Studio sẽ tiến hành bàn giao toàn bộ sản phẩm qua link Google Drive sau khi xác nhận thanh toán.",
            "**Bảo hành & lưu trữ:** Sản phẩm có thời hạn bảo hành 30 ngày. File dự án sẽ được lưu trữ trên Google Drive trong 20 ngày. Vui lòng tải về trước khi hết hạn.",
            "**Ghi danh (credit):** Bạn phải ghi rõ tên người tạo ra sản phẩm (credit) trong phần mô tả khi sử dụng trên các nền tảng mạng xã hội, livestream.",
            "**Quyền của Studio:** Studio có quyền sử dụng sản phẩm để quảng bá (portfolio, mạng xã hội) trừ khi có NDA.",
          ],
        },
      ],
    },
    pricing: {
      compareButton: "So sánh các gói",
      compareTitle: "So sánh các gói",
      tierLabel: "Thông số",
      tiers: [
        {
          name: "Gói 1",
          vnd: "$30",
          usd: "400.000đ",
          features: [
            "Tối đa 60 giây",
            "Thể loại cơ bản: Lo-fi, Piano",
            "Lý tưởng cho Intro, Outro, BGM",
          ],
          details: {
            genre: "Lo-fi, Piano, Chiptune",
            duration: "Tối đa 60 giây",
            useCase: "Intro, Outro, BGM",
            structure: "1 Intro - 1 Buildup (nếu có) - 1 Drop",
            mood: "Vui lòng nêu rõ mood của bài (ví dụ: đáng yêu, vui tươi, buồn, huyền bí, hào hùng,...)",
            loop: "Có",
            additionalSounds: "Có",
            excludeSounds: "Có",
            stemRequest: "+5%–10% phí",
            projectFileRequest: "FLP (+200%)",
            references:
              "YouTube / Soundcloud / File âm thanh nếu có (tối đa 3 bài)",
          },
        },
        {
          name: "Gói 2",
          vnd: "$50",
          usd: "800.000đ",
          features: [
            "Tối đa 150 giây",
            "Nhiều lựa chọn thể loại hơn",
            "Bản phối phức tạp hơn",
          ],
          details: {
            genre:
              "Lo-fi, Piano (melody + chord + bass), Trap, Chiptune, Kawaii Bass, Future Bass, Happy Hardcore, Orchestra, Khác",
            duration: "Tối đa 150 giây",
            useCase: "Intro, Outro, BGM",
            structure: "1 Intro - 1 Buildup (nếu có) - 1 Drop",
            mood: "Vui lòng nêu rõ mood của bài (ví dụ: đáng yêu, vui tươi, buồn, huyền bí, hào hùng,...)",
            loop: "Có",
            additionalSounds: "Có",
            excludeSounds: "Có",
            stemRequest: "+5%–10% phí",
            projectFileRequest: "FLP (+200%)",
            references:
              "YouTube / Soundcloud / File âm thanh nếu có (tối đa 3 bài)",
          },
        },
        {
          name: "Gói 3",
          vnd: "Từ $100",
          usd: "Từ 1.500.000đ",
          features: [
            "Tối đa 300 giây",
            "Cấu trúc tùy chỉnh",
            "Ưu tiên và chi tiết cao nhất",
          ],
          details: {
            genre:
              "Lo-fi, Piano (melody + chord + bass), Trap, Chiptune, Kawaii Bass, Future Bass, Happy Hardcore, Orchestra, Khác",
            duration: "Tối đa 300 giây",
            useCase: "Intro, Outro, BGM",
            structure: "Có thể custom và thương lượng theo nhu cầu",
            mood: "Vui lòng nêu rõ mood của bài (ví dụ: đáng yêu, vui tươi, buồn, huyền bí, hào hùng,...)",
            loop: "Có",
            additionalSounds: "Có",
            excludeSounds: "Có",
            stemRequest: "+5%–10% phí",
            projectFileRequest: "FLP (+200%)",
            references:
              "YouTube / Soundcloud / File âm thanh nếu có (tối đa 3 bài)",
          },
        },
      ],
      detailLabels: {
        genre: "Thể loại nhạc",
        duration: "Thời lượng (giây)",
        useCase: "Mục đích sử dụng",
        structure: "Cấu trúc",
        mood: "Mood",
        loop: "Lặp lại (loop)",
        additionalSounds: "Tuỳ chọn âm thanh thêm vào",
        excludeSounds: "Âm thanh không muốn có",
        stemRequest: "Yêu cầu cung cấp stem",
        projectFileRequest: "Yêu cầu cung cấp project file",
        references: "Tài liệu tham khảo",
      },
      note: "Giá trên là ước tính và có thể thay đổi tùy độ phức tạp. Liên hệ để có báo giá cụ thể.",
    },
    tos: {
      intro:
        "*Hãy đảm bảo rằng bạn đã chấp nhận những điều khoản này trước khi đặt hàng.*",
      sections: [
        {
          title: "A. Quy định",
          points: [
            "Trong bất kì trường hợp nào, khách hàng không được phép sử dụng bất kì phần nào của sản phẩm được bàn giao bởi Studio để phục vụ cho NFT hoặc sử dụng làm tài nguyên, tài liệu tham khảo để tạo ra các sản phẩm bằng phần mềm và trình tạo AI.",
            "Studio không chấp nhận việc sử dụng bất kỳ phần nào của sản phẩm vào mục đích khiêu dâm, chính trị, tôn giáo, thù địch hoặc phân biệt đối xử. Chúng tôi có quyền từ chối làm việc nếu khách hàng có mục đích liên quan đến những nội dung trên.",
          ],
        },
        {
          title: "B. Bàn giao và sử dụng",
          points: [
            "Sản phẩm sẽ được bàn giao toàn bộ cho khách hàng sau khi đã hoàn thành. Sẽ được bàn giao file âm thanh dưới dạng chất lượng gốc (wav), file âm thanh đã nén (mp3) và file project (flp) nếu yêu cầu.",
            "Sản phẩm sau khi bàn giao không được tự ý chỉnh sửa bởi khách hàng hoặc bên thứ ba trừ khi có sự đồng ý bằng văn bản từ Studio. Khách hàng không được tự ý chuyển nhượng hay bán lại sản phẩm.",
            "Sản phẩm sau khi được bàn giao vẫn thuộc quyền sở hữu trí tuệ của Studio, Studio có quyền sử dụng các sản phẩm này vào mục đích quảng bá.",
            "Sau khi đã bàn giao, khách hàng có thể sử dụng các sản phẩm tương ứng với các giấy phép thương mại sau:",
            "**Giấy phép thương mại cơ bản (miễn phí):**\n- Khách hàng có thể sử dụng sản phẩm sau khi được bàn giao để đăng tải trên các nền tảng mạng xã hội.\n- Sử dụng sản phẩm để livestream hoặc trong các video phi lợi nhuận.\n- Khi sử dụng sản phẩm, khách hàng phải để tên người thực hiện dưới dạng credit.",
            "**Giấy phép thương mại 2 (+100% giá trị sản phẩm):** Bao gồm toàn bộ quyền lợi trong giấy phép thương mại 1 và thêm các quyền lợi sau:\n- Phát tại các buổi sự kiện có lợi nhuận.\n- Sản xuất các sản phẩm kỹ thuật số: Patreon, Membership hay bất cứ nền tảng trao đổi kỹ thuật số nào.\n- Phân phối trên các nền tảng phát nhạc trực tuyến (Spotify, Apple Music,...)\n- Sản xuất các sản phẩm vật lý: CD, Vinyl...",
          ],
        },
        {
          title: "C. Bảo mật",
          points: [
            "Studio xác nhận và cam kết rằng mọi thông tin do khách hàng cung cấp sẽ được coi là thông tin bảo mật và không được tiết lộ công khai. Tất cả các bên có nghĩa vụ giữ kín thông tin này và chỉ sử dụng vào mục đích lưu trữ.",
            "Studio có quyền chia sẻ tiến độ dự án trên các nền tảng mạng xã hội, livestream trừ khi khách hàng yêu cầu cam kết thỏa thuận bảo mật (NDA).",
          ],
        },
        {
          title: "D. Chấm dứt và hoàn tiền",
          points: [
            "Cả hai bên Studio và khách hàng có thể chấm dứt thỏa thuận bất kỳ lúc nào bằng cách gửi thông báo bằng văn bản cho bên còn lại.",
            "Sau khi chấm dứt, khoản thanh toán và sản phẩm sẽ được quy định như sau:\n- Chưa bắt đầu: Studio sẽ hoàn trả 100% số tiền cọc mà khách hàng đã thanh toán.\n- Khi Studio đã bắt đầu thực hiện dự án và trước lần cập nhật thứ nhất: Studio sẽ không hoàn trả tiền cọc và gửi sản phẩm theo tiến độ đang thực hiện.\n- Tại lần cập nhật thứ hai: Khách hàng thanh toán phần còn lại cho Studio và Studio sẽ gửi sản phẩm theo tiến độ thực hiện và không hỗ trợ gì thêm.",
          ],
        },
      ],
    },
    faq: [
      {
        q: "Bạn chấp nhận phương thức thanh toán nào?",
        a: "Chúng tôi chấp nhận Chuyển khoản ngân hàng, Momo, Viettel Pay, Zalo Pay (tại Việt Nam) và Paypal (đối với khách quốc tế).",
      },
      {
        q: "Tôi có thể yêu cầu chỉnh sửa không?",
        a: "Có, một số lần chỉnh sửa nhỏ hợp lý đã được bao gồm trong giá để đảm bảo bạn hài lòng với sản phẩm cuối cùng. Các thay đổi lớn được yêu cầu sau khi phương hướng ban đầu đã được duyệt có thể phát sinh thêm chi phí.",
      },
      {
        q: "Tôi có thể sử dụng nhạc cho những mục đích nào? Giá đã bao gồm phí thương mại chưa?",
        a: "'Giấy phép thương mại cơ bản' được bao gồm miễn phí trong mỗi đơn hàng. Giấy phép này cho phép bạn sử dụng nhạc trên mạng xã hội, livestream, hoặc trong video phi lợi nhuận, với điều kiện phải ghi credit. Đối với các mục đích như phát hành lên Spotify, sự kiện có thu lợi nhuận, hoặc bán sản phẩm vật lý (CD, Vinyl), bạn sẽ cần mua 'Giấy phép thương mại 2' với một khoản phí bổ sung. Vui lòng xem Mục B trong Điều khoản dịch vụ của chúng tôi để biết chi tiết.",
      },
      {
        q: "Ai là người sở hữu bản quyền của bản nhạc?",
        a: "Studio giữ toàn quyền sở hữu trí tuệ đối với tác phẩm. Khi bạn đặt làm nhạc, bạn đang mua giấy phép để sử dụng nó theo các điều khoản đã thỏa thuận. Chúng tôi cũng có quyền sử dụng bản nhạc cho các mục đích quảng bá của mình (ví dụ: trong portfolio).",
      },
      {
        q: "Chính sách hoàn tiền của bạn là gì? Tôi có thể hủy đơn hàng không?",
        a: "Có, bạn có thể hủy đơn hàng. Chính sách hoàn tiền của chúng tôi dựa trên tiến độ của dự án: bạn sẽ được hoàn 100% nếu chúng tôi chưa bắt đầu. Nếu công việc đã bắt đầu, tiền cọc sẽ không được hoàn lại. Vui lòng tham khảo Mục D trong Điều khoản dịch vụ để biết chi tiết.",
      },
      {
        q: "Dự án của tôi có được giữ bí mật không?",
        a: "Thông tin cá nhân của bạn luôn được giữ bí mật. Tuy nhiên, chúng tôi có quyền chia sẻ tiến độ công việc (ví dụ: các đoạn clip, hình ảnh) trên mạng xã hội. Nếu dự án của bạn yêu cầu bảo mật tuyệt đối, vui lòng yêu cầu một thỏa thuận không tiết lộ (NDA) trước khi chúng ta bắt đầu.",
      },
      {
        q: "Tôi sẽ nhận được những định dạng file nào?",
        a: "Sau khi hoàn thành, bạn sẽ nhận được bản nhạc cuối cùng ở định dạng WAV chất lượng cao và MP3 đã nén. File project (FLP) cũng có thể được bàn giao nếu điều đó nằm trong thỏa thuận đặt hàng của bạn.",
      },
      {
        q: "Có loại dự án nào mà bạn không nhận làm không?",
        a: "Có. Chúng tôi không chấp nhận bất kỳ đơn đặt hàng nào nhằm mục đích sử dụng cho NFT hoặc để huấn luyện các mô hình AI. Chúng tôi cũng có quyền từ chối các dự án có chủ đề khiêu dâm, chính trị, tôn giáo, thù địch hoặc phân biệt đối xử.",
      },
    ],
  },
};
