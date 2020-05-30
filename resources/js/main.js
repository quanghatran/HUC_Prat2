// header
$("#header").append(
 $("<div>", {class: "headerWrapper df fdc jcsb w70"}).append(
    // top header
  $("<div>", { class: "topHeader ptb25 df jcsb" }).append(
    // logo
    $("<div>", { class: "logo" }).append(
      $("<a>", { href: "#" }).append(
        $("<img>", { src: "resources/images/customLogo.png" })
      )
    ),
    // users
    $("<div>", { class: "menu " }).append(
      $("<ul>", { class: "listMenu df lsn jcsb" }).append(
        $("<li>").append($("<a>", { text: "Trang chủ" , class: "activeMenu"})),
        $("<li>").append($("<a>", { text: "Tin tức" })),
        $("<li>").append($("<a>", { text: "Thông báo" })),
        $("<li>").append($("<a>", { text: "Tuyển sinh" })),
        $("<li>").append($("<a>", { text: "Đào tạo - Nghiên cứu" })),
        $("<li>").append($("<a>", { text: "Liên hệ" }))
      )
    ),
   
    // language
    $("<div>", { class: "language" }).append(
      $("<ul>", { class: "df lsn" }).append(
        $("<li>", { class: "mr5" }).append(
          $("<a>", { class: "language vietNam" }).append(
            $("<img>", { src: "resources/images/icons8_vietnam_48px.png" })
          )
        ),
        $("<li>").append(
          $("<a>", { class: "language english" }).append(
            $("<img>", {
              src: "resources/images/icons8_great_britain_48px.png",
            })
          )
        )
      )
    )
  ),

  // slide show
  $("<div>", { class: "slideShow pa w50 " }).append(
    $("<div>", { class: "welcome mb30" }).append(
      $("<h1>", {
        class: "firstLine animate__animated animate__backInDown",
        text: "Đại học Văn Hóa Hà Nội ",
      }),
      $("<h2>", {
        class: "secondLine animate__animated animate__backInLeft",
        text: " 60 năm xây dựng và phát triển",
      })
    ),
    $("<a>", {
      class: "button btnDelay cp animate__animated animate__zoomIn mr25  ",
      text: "Đăng Nhập",
    })
      .append
      // $("<i>", {class: "fas fa-angle-double-right ml5 fs14p"})
      (),
    $("<a>", {
      class: "button btnDelay cp animate__animated animate__zoomIn ",
      text: "Đăng Ký",
    })
      .append
      // $("<i>", {class: "fas fa-angle-double-right ml5 fs14p"})
      ()
  ),

  // grid boxes
  $("<div>", { class: "boxes df fww jcsb " }).append(
    $("<div>", { class: "box news" }).append(
      $("<img>", {
        class: "logoTop1",
        src: "resources/images/library-icon.png",
      }),
      $("<div>", { class: "content newsContent" }).append(
        $("<h3>", { text: "Tin mới" }),
        $("<a>", { class: "viewMore cf", text: "Tìm hiểu thêm " }).append(
          // $("<o>", { class: "iIcon ffi mr02 fs2 cf ", text: "arrow_right" })
          $("<i>", { class: " fas fa-chevron-right" })

        )
      )
    ),
    $("<div>", { class: "box search" }).append(
      $("<img>", {
        class: "logoTop2",
        src: "resources/images/student-icon.png",
      }),
      $("<div>", { class: "content searchContent" }).append(
        $("<h3>", { text: "Tra cứu" }),
        $("<a>", { class: "viewMore", text: "Tìm hiểu thêm " }).append(
          $("<i>", { class: " fas fa-chevron-right" })
        )
      )
    ),
    $("<div>", { class: "box library" }).append(
      $("<img>", {
        class: "logoTop3",
        src: "resources/images/seminor-icon.png",
      }),
      $("<div>", { class: "content libraryContent" }).append(
        $("<h3>", { text: "Thư viện" }),
        $("<a>", { class: "viewMore", text: "Tìm hiểu thêm " }).append(
          $("<i>", { class: "fas fa-chevron-right" })
        )
      )
    ),
    $("<div>", { class: "box certificate" }).append(
      $("<img>", {
        class: "logoTop4",
        src: "resources/images/certificate-icon.png",
      }),
      $("<div>", { class: "content libraryContent" }).append(
        $("<h3>", { text: "Chứng chỉ" }),
        $("<a>", { class: "viewMore", text: "Tìm hiểu thêm " }).append(
          $("<i>", { class: "fas fa-chevron-right" })
        )
      )
    )
  ),

  // button slide down
  $("<a>", { class: "down pa", href: "#main" }).append(
    $("<i>", { class: "far fa-arrow-alt-circle-down" })
  )
 )
);

// main
$("#main").append(
  // newsletter
  $("<div>", { class: "mainBox newsletter w70" }).append(
    $("<h2>", { class: "titleMainBox tac", text: "Tin tức - Thông báo" }),
    $("<div>", { class: "mainBoxContent newsletterContent" }).append(
      $("<div>", { class: "leftContent pr25" }).append(
        $("<div>", { class: "contentImage" }),
        $("<div>", { class: "contentText " }).append(
          $("<a>", {
            class: "titleText",
            text:
              "Tọa đàm Doanh nghiệp - Doanh nhân trực tuyến: Quản trị khủng hoảng doanh nghiệp du lịch mùa dịch COVID-19",
            href: "#",
          }),

          $("<div>", {
            class: "leftParagraph mt10 mb10",
            text:
              "Để theo kịp với diễn biến “nóng-lạnh” của thị trường du lịch do tác động của dịch Covid-19, cập nhật tình hình cụ thể, thực tế của các doanh nghiệp du lịch Việt Nam hiện nay và có thể dự đoán xu thế phát triển, nhu cầu. Nhân dịp xuân Canh Tý 2020 đang đến gần, sáng ngày 16/01/2020, tại Nhà văn hóa, Trường Đại học Văn hóa Hà Nội đã tổ chức buổi gặp mặt cuối năm.Đây là dịp để lãnh đạo đương nhiệm Nhà trường thông báo những kết quả...",
          }),
          $("<div>", { class: "subText df jcsb" }).append(
            $("<div>", { class: "admin" }).append(
              $("<i>", { class: "adminIcon fas fa-user" }),
              $("<span>", { class: "adminName", text: "Quang Hà" })
            ),
            $("<div>", { class: "times" }).append(
              $("<i>", { class: "far fa-clock" }),
              $("<span>", { class: "timesText", text: "28/05/2020" })
            ),
            $("<div>", { class: "comments" }).append(
              $("<i>", { class: "far fa-comment" }),
              $("<span>", { class: "commentText", text: "1 bình luận" })
            )
          ),
          $("<a>", {
            class: "buttonOutLine viewMore",
            text: "Xem bài viết",
            href: "#",
          }).append($("<i>", { class: "fas fa-angle-double-right ml5 fs14p" }))
        )
      ),
      $("<div>", { class: "rightContent" }).append(
        $("<div>", { class: "rightContentItem item1" }).append(
          $("<div>", { class: "contentImage" }),
          $("<div>", { class: "contentText" }).append(
            $("<a>", {
              class: "titleText",
              text:
                "Ngắm nhìn vẻ đẹp nữ sinh đại học Văn Hóa Hà Nội trong tà áo dài ",
              href: "#",
            }),
            $("<div>", { class: "subText" }).append(
              $("<div>", { class: "admin" }).append(
                $("<i>", { class: "adminIcon fas fa-user" }),
                $("<span>", { class: "adminName", text: "Quang Hà" })
              ),
              $("<div>", { class: "times" }).append(
                $("<i>", { class: "far fa-clock" }),
                $("<span>", { class: "timesText", text: "28/05/2020" })
              ),
              $("<div>", { class: "comments" }).append(
                $("<i>", { class: "far fa-comment" }),
                $("<span>", { class: "commentText", text: "1 bình luận" })
              )
            )
          )
        ),

        $("<div>", { class: "rightContentItem item2" }).append(
          $("<div>", { class: "contentImage" }),
          $("<div>", { class: "contentText" }).append(
            $("<a>", {
              class: "titleText",
              text:
                "Đại học Văn Hóa Hà Nội ra mắt MV: Tế COVID, khát khao chiến thắng dịch bệnh ",
              href: "#",
            }),
            $("<div>", { class: "subText" }).append(
              $("<div>", { class: "admin" }).append(
                $("<i>", { class: "adminIcon fas fa-user" }),
                $("<span>", { class: "adminName", text: "Quang Hà" })
              ),
              $("<div>", { class: "times" }).append(
                $("<i>", { class: "far fa-clock" }),
                $("<span>", { class: "timesText", text: "28/05/2020" })
              ),
              $("<div>", { class: "comments" }).append(
                $("<i>", { class: "far fa-comment" }),
                $("<span>", { class: "commentText", text: "1 bình luận" })
              )
            )
          )
        ),

        $("<div>", { class: "rightContentItem item3" }).append(
          $("<div>", { class: "contentImage" }),
          $("<div>", { class: "contentText" }).append(
            $("<a>", {
              class: "titleText",
              text: "Lễ bổ nhiệm phó hiệu trưởng trường Đại học Văn Hóa Hà Nội",
              href: "#",
            }),
            $("<div>", { class: "subText" }).append(
              $("<div>", { class: "admin" }).append(
                $("<i>", { class: "adminIcon fas fa-user" }),
                $("<span>", { class: "adminName", text: "Quang Hà" })
              ),
              $("<div>", { class: "times" }).append(
                $("<i>", { class: "far fa-clock" }),
                $("<span>", { class: "timesText", text: "28/05/2020" })
              ),
              $("<div>", { class: "comments" }).append(
                $("<i>", { class: "far fa-comment" }),
                $("<span>", { class: "commentText", text: "1 bình luận" })
              )
            )
          )
        ),

        $("<div>", { class: "rightContentItem item4" }).append(
          $("<div>", { class: "contentImage" }),
          $("<div>", { class: "contentText" }).append(
            $("<a>", {
              class: "titleText",
              text:
                "Đại học Văn Hóa Hà Nội mở lớp tập huấn giảng dạy trực tuyến",
              href: "#",
            }),
            $("<div>", { class: "subText" }).append(
              $("<div>", { class: "admin" }).append(
                $("<i>", { class: "adminIcon fas fa-user" }),
                $("<span>", { class: "adminName", text: "Quang Hà" })
              ),
              $("<div>", { class: "times" }).append(
                $("<i>", { class: "far fa-clock" }),
                $("<span>", { class: "timesText", text: "28/05/2020" })
              ),
              $("<div>", { class: "comments" }).append(
                $("<i>", { class: "far fa-comment" }),
                $("<span>", { class: "commentText", text: "1 bình luận" })
              )
            )
          )
        )
      )
    ),
    $("<div>", { class: "tac mtb50 fs15" }).append(
      $("<a>", {
        class: "buttonSecondary tac ",
        text: "Xem tất cả",
        href: "#",
      }).append($("<i>", { class: "fas fa-angle-double-right ml5 fs09" }))
    ), 
    $("<hr>", {class: "hrStyle"})
  ),

  // events
  $("<div>", { class: "mainBox events w70" }).append(
    $("<h2>", { class: "titleMainBox tac", text: "Sự kiện nổi bật" }),
    $("<div>", { class: "mainBoxContent eventsContent" })
      .append(
        $("<div>", {class: "listEvent"}).append(
            $("<ul>", {class: "df lstn jcsb"}).append(
                $("<li>", {class: "mb30"}).append(
                    $("<a>", {text: "Sinh viên",type: "button", "data-filter":"*", class: "active"})
                ),
                $("<li>").append(
                    $("<a>", {text: "Giảng viên",type: "button", "data-filter":".dt1"})
                ),
                $("<li>").append(
                    $("<a>", {text: "Quốc tế",type: "button", "data-filter":".dt2"})
                ),
                $("<li>").append(
                    $("<a>", {text: "Tuyển sinh",type: "button", "data-filter":".dt3"})
                ),
                $("<li>").append(
                    $("<a>", {text: "Đào tạo",type: "button", "data-filter":".dt4"})

                )
            )
        ), 
        $("<div>", {class: "boxsEvent df fdr fww jcsb"}).append(
            $("<div>", {class: "box box1 dt1"}).append(
                $("<div>", {class: "boxImage boxImage1 mb15"}),
                $("<div>", {class: "boxInfo df fdc"}).append(
                    $("<div>", {class: "boxSub df dfw jcsb mb7"}).append(
                        $("<div>", {class: "admin"}).append(
                            $("<i>", { class: "adminIcon fas fa-user mr5" }),
                            $("<span>", { class: "adminName", text: "Quang Hà" })
                        ),
                        $("<div>", { class: "times" }).append(
                            $("<i>", { class: "far fa-clock mr5" }),
                            $("<span>", { class: "timesText", text: "28/05/2020" })
                        ),
                    ),
                    $("<div>", {class: "boxTitle"}).append(
                        $("<h3>", {text:"Đại hội đại biểu lần thứ XV"})
                    )
                )
            ),
            $("<div>", {class: "box box2 dt2"}).append(
                $("<div>", {class: "boxImage boxImage2 mb15"}),
                $("<div>", {class: "boxInfo df fdc"}).append(
                    $("<div>", {class: "boxSub df dfw jcsb mb7"}).append(
                        $("<div>", {class: "admin"}).append(
                            $("<i>", { class: "adminIcon fas fa-user mr5" }),
                            $("<span>", { class: "adminName", text: "Quang Hà" })
                        ),
                        $("<div>", { class: "times" }).append(
                            $("<i>", { class: "far fa-clock mr5" }),
                            $("<span>", { class: "timesText", text: "28/05/2020" })
                        ),
                    ),
                    $("<div>", {class: "boxTitle"}).append(
                        $("<h3>", {text:"Hội diễn văn nghệ HUC"})
                    )
                )
            ),
            $("<div>", {class: "box box3 dt4"}).append(
                $("<div>", {class: "boxImage boxImage3 mb15"}),
                $("<div>", {class: "boxInfo df fdc"}).append(
                    $("<div>", {class: "boxSub df dfw jcsb mb7"}).append(
                        $("<div>", {class: "admin"}).append(
                            $("<i>", { class: "adminIcon fas fa-user mr5" }),
                            $("<span>", { class: "adminName", text: "Quang Hà" })
                        ),
                        $("<div>", { class: "times" }).append(
                            $("<i>", { class: "far fa-clock mr5" }),
                            $("<span>", { class: "timesText", text: "28/05/2020" })
                        ),
                    ),
                    $("<div>", {class: "boxTitle"}).append(
                        $("<h3>", {text:"Quyết định bổ nhiệm cán bộ"})
                    )
                )
            ),
            $("<div>", {class: "box box4 dt1"}).append(
                $("<div>", {class: "boxImage boxImage4 mb15"}),
                $("<div>", {class: "boxInfo df fdc"}).append(
                    $("<div>", {class: "boxSub df dfw jcsb mb7"}).append(
                        $("<div>", {class: "admin"}).append(
                            $("<i>", { class: "adminIcon fas fa-user mr5" }),
                            $("<span>", { class: "adminName", text: "Quang Hà" })
                        ),
                        $("<div>", { class: "times" }).append(
                            $("<i>", { class: "far fa-clock mr5" }),
                            $("<span>", { class: "timesText", text: "28/05/2020" })
                        ),
                    ),
                    $("<div>", {class: "boxTitle"}).append(
                        $("<h3>", {text:"Cuộc thi hoa khôi HUC"})
                    )
                )
            ),
            $("<div>", {class: "box box5 dt3"}).append(
                $("<div>", {class: "boxImage boxImage5 mb15"}),
                $("<div>", {class: "boxInfo df fdc"}).append(
                    $("<div>", {class: "boxSub df dfw jcsb mb7"}).append(
                        $("<div>", {class: "admin"}).append(
                            $("<i>", { class: "adminIcon fas fa-user mr5" }),
                            $("<span>", { class: "adminName", text: "Quang Hà" })
                        ),
                        $("<div>", { class: "times" }).append(
                            $("<i>", { class: "far fa-clock mr5" }),
                            $("<span>", { class: "timesText", text: "28/05/2020" })
                        ),
                    ),
                    $("<div>", {class: "boxTitle"}).append(
                        $("<h3>", {text:"Vẻ đẹp HUC"})
                    )
                )
            ),
            $("<div>", {class: "box box6 dt3"}).append(
                $("<div>", {class: "boxImage boxImage6 mb15"}),
                $("<div>", {class: "boxInfo df fdc"}).append(
                    $("<div>", {class: "boxSub df dfw jcsb mb7"}).append(
                        $("<div>", {class: "admin"}).append(
                            $("<i>", { class: "adminIcon fas fa-user mr5" }),
                            $("<span>", { class: "adminName", text: "Quang Hà" })
                        ),
                        $("<div>", { class: "times" }).append(
                            $("<i>", { class: "far fa-clock mr5" }),
                            $("<span>", { class: "timesText", text: "28/05/2020" })
                        ),
                    ),
                    $("<div>", {class: "boxTitle"}).append(
                        $("<h3>", {text:"Đại hội đại biểu lần thứ XV"})
                    )
                )
            )
        )

      ),
    $("<div>", { class: "tac mtb50 fs15" }).append(
      $("<a>", {
        class: "buttonSecondary tac ",
        text: "Xem tất cả",
        href: "#",
      }).append($("<i>", { class: "fas fa-angle-double-right ml5 fs09" }))
    ),
    $("<hr>", {class: "hrStyle"})

  ),

  // adminisions
  $("<div>", { class: "mainBox admissions w70" }).append(
    $("<h2>", { class: "titleMainBox tac", text: "Thông tin tuyển sinh" }),
    $("<div>", { class: "mainBoxContent admissionsContent df jcsb oh" }).append(
      $("<div>", { class: "admissionsItem undergraduate w45 oh" }).append(
        $("<a>", { class: "admissionsImage imageUndergraduate ta5", href: "#" }),

        $("<div>", { class: "admissionsInfo infoUndergraduate" }).append(
          $("<a>", {
            class: "admissionsTitle titleUndergraduate",
            href: "#",
          }).append($("<h3>", { text: "Đại học" })),
          $("<p>", {
            text:
              "(ĐH VHHN) - Trong cuộc Cách mạng công nghiệp lần thứ 4, thế giới đã và đang chứng kiến sự gia tăng với tốc độ ngày càng nhanh chóng của khối lượng thông tin, dữ liệu và những tác động của chúng. Chưa bao giờ trong lịch sử, đội ngũ các chuyên gia thông tin, những người nắm “chìa khóa thông tin” lại được cần đến như vậy...",
          })
        )
      ),
      $("<div>", { class: "admissionsItem postgraduate w45" }).append(
        $("<a>", { class: "admissionsImage imagePostgraduate df", href: "#" }),
        $("<div>", { class: "admissionsInfo infoPostgraduate" }).append(
          $("<a>", {
            class: "admissionsTitle titlePostgraduate",
            href: "#",
          }).append($("<h3>", { text: "Sau đại học" })),
          $("<p>", {
            text:
              "Khoa Thông tin ,Thư viện (Trường Đại học Văn hóa Hà Nội) là cơ sở đào tạo nguồn nhân lực thông tin thư viện có bề dày lịch sử ở Việt Nam với sứ mệnh nâng cao năng lực thông tin của cơ quan, tổ chức và cá nhân trên cơ sở kết nối thông tin, công nghệ và con người. Trải qua gần 60 năm hình thành và phát triển nguồn nhân lực được đào tạo từ Khoa...",
          })
        )
      )
    ),
    $("<div>", { class: "tac mtb50 fs15" }).append(
      $("<a>", {
        class: "buttonSecondary tac ",
        text: "Xem tất cả",
        href: "#",
      }).append($("<i>", { class: "fas fa-angle-double-right ml5 fs09" }))
    ),
    $("<hr>", {class: "hrStyle"})
  ),

  // student active
  $("<div>", { class: "mainBox studentActive w70" }).append(
    $("<h2>", { class: "titleMainBox tac", text: "Đời sống sinh viên" }),
    $("<div>", { class: "mainBoxContent mainStudentActive" }).append(

      $("<div>", {class: "studentActiveItem item1"}).append(
        $(("<div>"), {class: "studentActiveInfo"}).append(
          $("<div>", {class: "infoTitle", text: "Thông báo"}),
          $("<br>"),

          $("<a>", {class: "infoLink", href: "#", text: "Kỉ niệm 70 năm ngày truyền thống học sinh, sinh viên và hội sinh viên..."})
        )
      ), 
      $("<div>", {class: "studentActiveItem item2"}).append(
        $(("<div>"), {class: "studentActiveInfo"}).append(
          $("<div>", {class: "infoTitle", text: "Thông báo"}),
          $("<br>"),
          $("<a>", {class: "infoLink", href: "#", text: "Để theo kịp với diễn biến “nóng-lạnh” của thị trường du lịch do tác động..."})
        )
      ), 

      $("<div>", {class: "studentActiveItem item3"}).append(
        $(("<div>"), {class: "studentActiveInfo"}).append(
          $("<div>", {class: "infoTitle", text: "Thông báo"}),
          $("<br>"),
          $("<a>", {class: "infoLink", href: "#", text: "Phó bí thư đoàn thanh niên..."})
        )
      ), 

      $("<div>", {class: "studentActiveItem item4"}).append(
        $(("<div>"), {class: "studentActiveInfo"}).append(
          $("<div>", {class: "infoTitle", text: "Thông báo"}),
          $("<br>"),
          $("<a>", {class: "infoLink", href: "#", text: "Nữ sinh thủ khoa năm 2020..."})
        )
      )

    ),
    $("<div>", { class: "tac mtb50 fs15" }).append(
      $("<a>", {
        class: "buttonSecondary tac ",
        text: "Xem tất cả",
        href: "#",
      }).append($("<i>", { class: "fas fa-angle-double-right ml5 fs09" }))
    )
  )
  
);

// footer
$("#footer").append(
  $("<div>", {class: "footerContact"}).append(
    $("<div>", {class : "wrapper df fdc jcsb"}).append(
      $("<div>", {class: "topWrapper w70 df jcsb"}).append(
        // contact filed
        $("<div>", {class: "contact"}).append(
          $("<div>", {class: "contactField mt75"}).append(
            $("<div>", {class: "imageContact"}).append(
              $("<img>", { src: "resources/images/customLogo.png" })
            ),
            $("<div>", {class: "infoContact"}).append(
              $("<div>", {class: "phone"}).append(
                $("<i>", { class: "footerContactIcon fas fa-phone" }),
                $("<span>", { class: "footerContactText", text: " 123 456 789"})
              ),
              $("<div>", {class: "email"}).append(
                $("<i>", { class: "footerContactIcon fas fa-envelope" }),
                $("<span>", { class: "footerContactText", text: " HUC@edu.com.vn"})
            )
            ),
            $("<div>", {class: "iconsContact"}).append(
              $("<a>", {class: "icon", href: "#"}).append(
                $("<i>", { class: "fab fa-facebook-f"})
              ),
              $("<a>", {class: "icon", href: "#"}).append(
                $("<i>", { class: "fab fa-twitter"})
              ),
              $("<a>", {class: "icon", href: "#"}).append(
                $("<i>", { class: "fab fa-google-plus-g"})
              ),
              $("<a>", {class: "icon", href: "#"}).append(
                $("<i>", { class: "fab fa-instagram"})
              )            
            )
          )
        ),

        // links filed
        $("<div>", {class: "listLink df jcsb mt75"}).append(
            $("<div>", {class: "listItem"}).append(
              $("<h3>", {class: "headerList", text: "Giới thiệu"}),
              $("<div>", {class: "bodyList"}).append(
                $("<a>", {class: "list", text: "Tổng quan", href: "#"}),
                $("<a>", {class: "list", text: "Cơ cấu tổ chức", href: "#"}),
                $("<a>", {class: "list", text: "Thông điệp", href: "#"}),
                $("<a>", {class: "list", text: "Ba công khai", href: "#"})
              )
            ),
            $("<div>", {class: "listItem"}).append(
              $("<h3>", {class: "headerList", text: "Tin tức"}),
              $("<div>", {class: "bodyList"}).append(
                $("<a>", {class: "list", text: "Đào tạo", href: "#"}),
                $("<a>", {class: "list", text: "Thông báo", href: "#"}),
                $("<a>", {class: "list", text: "Sự kiện", href: "#"}),
                $("<a>", {class: "list", text: "Hoạt động chung", href: "#"})
              )
            ),
            $("<div>", {class: "listItem"}).append(
              $("<h3>", {class: "headerList", text: "Tuyển sinh"}),
              $("<div>", {class: "bodyList"}).append(
                $("<a>", {class: "list", text: "Đại học", href: "#"}),
                $("<a>", {class: "list", text: "Cao học", href: "#"}),
                $("<a>", {class: "list", text: "Nghiên cứu sinh", href: "#"}),
                $("<a>", {class: "list", text: "Văn bằng 2", href: "#"})
              )
            ),
            $("<div>", {class: "listItem"}).append(
              $("<h3>", {class: "headerList", text: "Đào tạo"}),
              $("<div>", {class: "bodyList"}).append(
                $("<a>", {class: "list", text: "Thạc sĩ", href: "#"}),
                $("<a>", {class: "list", text: "Tiến sĩ", href: "#"}),
                $("<a>", {class: "list", text: "Vừa học vừa làm", href: "#"}),
                $("<a>", {class: "list", text: "Đại học chính quy", href: "#"})
              )
            ),
          )
        ), 
        $("<div>", {class: "bottomWrapper w70 "}).append(
          $("<hr>", {class: "hrStyle"}),
          $("<div>", {class: "copyRight fr", text: "© 2020 Copyright HaNoi University of Culture 2020 - Design By Quang Ha"})
        )
      )
    
  ),
  $("<div>", {class: "footerBanner"})
  // $("<h3>", {class: "footerContent", text: "Join thousand of instructors and earn money hassle free!"})===
)

