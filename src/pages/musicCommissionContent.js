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
            "**Confirmation & Quote:** You will receive a confirmation email with a price quote from us within 3 days.",
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
            "**Feedback:** Prompt feedback is crucial. If there is no response from the client within 3 days, we reserve the right to terminate the project.",
            "**Revisions:** You receive 3 free minor revisions after the final draft is delivered. Major changes may incur additional fees.",
            "**Confidentiality (NDA):** You can request a Non-Disclosure Agreement (NDA) for an additional fee of 10% of the total order value.",
          ],
        },
        {
          title: "Phase 3: After Completion",
          points: [
            "**Final Payment:** Once you approve the final product, the remaining balance must be paid.",
            "**Delivery:** We will deliver all final files via a Google Drive link after the final payment is confirmed.",
            "**Warranty & Storage:** The product includes a 30-day warranty. All files will be stored on our Google Drive for 20 days. Please download your files before this period ends.",
            "**Credit:** You must provide proper credit to the creator in the description when using the product on social media, streams, etc.",
            "**Our Rights:** We reserve the right to use the final product for promotional purposes (portfolio, social media) unless an NDA is in place.",
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
          price: "USD 30",
          features: [
            "Up to 60 seconds",
            "Basic genres like Lo-fi, Piano, Simple Kawaii Beats",
            "Ideal for Intros, Outros, BGM",
          ],
          details: {
            genre: "Lo-fi, Piano, Simple Kawaii Beats",
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
          price: "USD 50",
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
          price: "From USD 100",
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
            "Under no circumstances is the client permitted to use any part of the product delivered by us for NFT purposes or as a resource/reference for creating products using AI software and generators.",
            "We do not permit the use of any part of the product for pornographic, political, religious, hostile, or discriminatory purposes. We reserve the right to refuse service if the client's intentions involve such content.",
          ],
        },
        {
          title: "B. Delivery and Usage",
          points: [
            "The complete product will be delivered to the client upon completion. Delivery will include the original quality audio file (WAV), a compressed audio file (MP3), and the project file (FLP) if requested.",
            "After delivery, the product may not be altered by the client or a third party without our written consent. The client may not transfer or resell the product.",
            "The intellectual property of the delivered product remains with us. We reserve the right to use these products for promotional purposes.",
            "After delivery, the client may use the products according to the following Commercial Licenses:",
            "**Basic Commercial License (Free):**\n- The client may use the delivered product for posting on social media platforms.\n- Use the product for livestreams or in non-profit videos.\n- When using the product, the client must credit the creator.",
            "**Commercial License 2 (+100% of product value):** Includes all rights from the Basic Commercial License, plus the following:\n- Broadcasting at for-profit events.\n- Production of digital goods: Patreon, Memberships, or any digital exchange platform.\n- Distribution on music streaming platforms (Spotify, Apple Music, etc.).\n- Production of physical goods: CDs, Vinyl, etc.",
          ],
        },
        {
          title: "C. Confidentiality",
          points: [
            "We confirm and commit that all information provided by the client will be treated as confidential and will not be disclosed publicly. All parties are obligated to keep this information private and use it only for archival purposes.",
            "We reserve the right to share project progress on social media platforms or livestreams unless the client requests a Non-Disclosure Agreement (NDA).",
          ],
        },
        {
          title: "D. Termination and Refund",
          points: [
            "Both we and the client may terminate the agreement at any time by providing written notice to the other party.",
            "Upon termination, payment and product delivery will be handled as follows:\n- After we have begun working on the project: We will not refund the deposit and will send the product according to its current progress.\n- At the second update: The client must pay the remaining balance to us, and we will deliver the product according to its current progress with no further support.",
          ],
        },
      ],
    },
    faq: [
      {
        q: "What payment methods do you accept?",
        a: "We accept PayPal.",
      },
      {
        q: "What files will I receive?",
        a: "For music commissions, you will receive the final .wav file, stems (.zip), and the project file (.flp) if agreed upon. All files are delivered via email.",
      },
      {
        q: "Is commercial use included?",
        a: "Non-Commercial Use is included by default. This allows use in livestreams, personal videos, and social media, with proper credit. For any revenue-generating use—such as music platform releases, commercial projects, merchandise, Patreon content, or live performances—a Commercial License (+100% of the base price) is required.",
      },
      {
        q: "Can I edit the music after delivery?",
        a: "No. You may not modify, alter, remix, or redistribute the product without our written consent. If you need adjustments, please contact us directly.",
      },
      {
        q: "Who owns the rights to the music?",
        a: "We retain full intellectual property rights. You are purchasing a license to use the music under the agreed Terms of Service. We may showcase the work for promotional purposes unless an NDA is requested.",
      },
      {
        q: "What is your refund policy?",
        a: "If the project has not started (no 50% progress update), we offer a full refund of the deposit. Once work has begun (50% update delivered), the deposit becomes non-refundable. Demo versions or previews may not be used if the project is canceled.",
      },
      {
        q: "Can I use the demo version if the commission is canceled?",
        a: "No. All demos, previews, and draft versions remain our property and cannot be used, posted, reproduced, or distributed under any circumstances.",
      },
      {
        q: "Will my project be kept confidential?",
        a: "Your personal information is always kept confidential. We may share progress or previews unless you request a Non-Disclosure Agreement (NDA) before work begins.",
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
          price: "500.000đ",
          features: [
            "Tối đa 60 giây",
            "Thể loại cơ bản: Lo-fi, Piano, Simple Kawaii Beats",
            "Lý tưởng cho Intro, Outro, BGM",
          ],
          details: {
            genre: "Lo-fi, Piano, Simple Kawaii Beats",
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
          price: "1.000.000đ",
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
          price: "Từ 1.500.000đ",
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

    },
    faq: [
      {
        "q": "Bạn chấp nhận những phương thức thanh toán nào?",
        "a": "Tôi chấp nhận thanh toán qua Chuyển khoản ngân hàng, Momo, ViettelPay, ZaloPay."
      },
      {
        "q": "Tôi sẽ nhận được những file gì khi đặt sản phẩm âm nhạc?",
        "a": "Bạn sẽ nhận được file .wav chất lượng cao, file stem, file project gốc (nếu được yêu cầu). Tất cả được bàn giao qua Google Drive."
      },
      {
        "q": "Tôi có thể sử dụng bài nhạc cho mục đích gì? Đã bao gồm phí thương mại chưa?",
        "a": "Giấy phép thương mại cơ bản được bao gồm miễn phí, cho phép bạn sử dụng bài nhạc trên mạng xã hội, livestream hoặc video phi lợi nhuận (kèm credit). Nếu bạn muốn sử dụng nhạc cho quảng cáo, tài trợ, thương hiệu cá nhân, hoặc gắn vào sản phẩm kỹ thuật số/ vật lý thương mại, bạn cần nâng cấp lên các gói Giấy phép thương mại 2 (+100%). Chi tiết xem trong Mục B của Điều khoản dịch vụ."
      },
      {
        "q": "Tôi có được quyền chỉnh sửa hoặc remix bài nhạc sau khi nhận không?",
        "a": "Không. Bạn không được tự chỉnh sửa, remix, tách vocal/beat, hoặc giao cho bên thứ ba chỉnh sửa khi chưa có sự đồng ý bằng văn bản. Điều này nhằm đảm bảo chất lượng và giữ sự thống nhất trong sản phẩm. Nếu bạn muốn chỉnh sửa, hãy liên hệ để được hỗ trợ."
      },
      {
        "q": "Ai sở hữu bản quyền bài nhạc?",
        "a": "Studio là tổ chức giữ quyền sở hữu trí tuệ đối với toàn bộ tác phẩm âm nhạc (beat, phối khí, melody, cấu trúc). Bạn mua **giấy phép sử dụng**, không phải mua đứt bản quyền. Studio cũng có quyền dùng bài nhạc trong portfolio trừ khi bạn yêu cầu NDA."
      },
      {
        "q": "Chính sách hoàn tiền như thế nào?",
        "a": "Nếu tôi chưa bắt đầu dự án, bạn được hoàn 100%. Khi dự án đã bắt đầu, tiền cọc sẽ không được hoàn lại. Ở giai đoạn cập nhật thứ hai, bạn cần thanh toán phần còn lại và tôi sẽ bàn giao sản phẩm đúng tiến độ nhưng không hỗ trợ chỉnh sửa thêm. Vui lòng xem Mục D trong Điều khoản dịch vụ."
      },
      {
        "q": "Dự án âm nhạc của tôi có được giữ bí mật không?",
        "a": "Tất cả thông tin của bạn được bảo mật. Tôi có thể đăng tiến độ dự án trừ khi bạn yêu cầu ký NDA. Nếu bạn cần hoàn toàn riêng tư, vui lòng báo trước để tôi bảo lưu toàn bộ nội dung."
      }
    ]
  },
};
