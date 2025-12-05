(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    16760: (e, t, i) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(83007);
        },
      ]);
    },
    83007: (e, t, i) => {
      "use strict";
      (i.r(t), i.d(t, { __N_SSP: () => E, default: () => O }));
      var n = i(97537),
        a = i(14232),
        o = i(37876);
      function r(e) {
        var t = e.message,
          i = (0, a.useState)(!!t),
          n = i[0],
          r = i[1];
        return t && n
          ? (0, o.jsx)("div", {
              className: "flex items-center justify-center mx-6 mt-6 ".concat(
                !n && "hidden",
              ),
              children: (0, o.jsxs)("div", {
                className:
                  "flex w-full max-w-[1253px] items-center justify-between rounded bg-allianca-quaternary-light p-4",
                children: [
                  (0, o.jsx)("p", {
                    className:
                      "text-neutral-darkest font-semibold leading-5 text-xs md:text-sm",
                    children: t,
                  }),
                  (0, o.jsx)("img", {
                    src: "./index_files/close-azul-claro.svg",
                    alt: "\xcdcone de fechar da mensagem",
                    width: 20,
                    height: 20,
                    className: "cursor-pointer ml-4",
                    onClick: function () {
                      r(!1);
                    },
                  }),
                ],
              }),
            })
          : (0, o.jsx)("div", { className: "mt-10" });
      }
      var s = i(48235),
        l = i(83358),
        d = function (e) {
          return e.hide ? (0, o.jsx)(o.Fragment, {}) : (0, o.jsx)(l.oH, {});
        },
        c = i(73121),
        m = i(59174),
        h = i(28729),
        p = i(52032),
        u = i(80427),
        x = u.Ay.div.withConfig({
          displayName: "styles__CarouselIconContainer",
          componentId: "sc-1q67ibz-0",
        })(["", ""], function (e) {
          var t = e.theme;
          return (0, u.AH)(
            [
              "display:flex;align-items:center;justify-content:center;width:auto;max-width:262px;height:140px;margin-right:16px;img{max-width:262px;max-height:140px;}@media (max-width:",
              "){img{max-width:50px;max-height:50px;}}@media (max-width:",
              "){display:flex;align-items:center;margin-right:16px;min-width:auto;}",
            ],
            t.breakpoints.md,
            t.breakpoints.sm,
          );
        });
      function g(e) {
        var t = e.image,
          i = e.imageMobile,
          n = e.imageAlt,
          a = e.imageMobileAlt,
          r = (0, p.t)().isDevice;
        return (0, o.jsx)(x, {
          children: (0, o.jsx)("img", {
            src: r.mobile ? i : t,
            alt: r.mobile ? a : n,
          }),
        });
      }
      var f = u.Ay.div.withConfig({
          displayName: "styles__SectionBannerWrapper",
          componentId: "sc-1ayx0o0-0",
        })(["display:flex;justify-content:center;width:100%;"]),
        w = u.Ay.div.withConfig({
          displayName: "styles__SectionBannerContainer",
          componentId: "sc-1ayx0o0-1",
        })(["", ""], function (e) {
          var t = e.theme,
            i = e.isBannerDefault;
          return (0, u.AH)(
            [
              "display:flex;justify-content:center;width:100%;max-width:",
              ";height:160px;@media (max-width:",
              "){height:230px;}.swiper-slide{position:relative;top:4px;transition-property:transform;width:100%;height:140px;padding-right:48px;@media (max-width:",
              "){width:",
              ";padding-right:",
              ";}}.swiper-slide-visible{@media (max-width:",
              "){padding-right:",
              ";}}.swiper-button-prev,.swiper-button-next{width:",
              ";height:",
              ";border:1px solid ",
              ";border-radius:100%;background-color:",
              ";@media (max-width:",
              "){display:none;}}.swiper-button-next::after,.swiper-button-prev::after{font-size:",
              ";font-weight:",
              ";color:",
              ";}.swiper-pagination-bullet{width:4px;height:4px;margin-left:0 !important;margin-right:0 !important;}.swiper-pagination-bullets{display:flex;width:100;justify-content:center;margin-top:",
              ";gap:4px !important;}.swiper-pagination-bullet-active{",
              "}.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{position:relative;bottom:20px;width:100%;}.swiper{width:100%;}",
            ],
            t.grid.container,
            t.breakpoints.sm,
            t.breakpoints.md,
            i ? "100%" : "90%",
            i ? "24px" : "48px",
            t.breakpoints.md,
            i ? "48px" : "16px",
            t.spacings.medium,
            t.spacings.medium,
            t.colors["neutral-color-low-light"],
            t.colors.white,
            t.breakpoints.md,
            t.font.sizes.xsmall,
            t.font.xsbold,
            t.colors.redesign["dark-deep"],
            t.spacings.xsmall,
            function (e) {
              var t = e.theme;
              return (0, u.AH)(
                ["background-color:", ";"],
                t.colors.redesign["primary-medium"],
              );
            },
          );
        }),
        y = u.Ay.div.withConfig({
          displayName: "styles__BannerCarousel",
          componentId: "sc-1ayx0o0-2",
        })(["", ""], function (e) {
          var t = e.theme,
            i = e.backgroundColor;
          return (0, u.AH)(
            [
              "position:relative;left:24px;display:flex;align-items:center;justify-content:space-between;width:100%;max-width:1252px;height:140px;padding-right:72px;padding-left:",
              ";border-radius:",
              ";background-color:#ffffff;",
              " @media (max-width:",
              "){height:200px;border-radius:16px;padding:16px;}",
            ],
            t.spacings.small,
            t.border.radius.medium,
            function () {
              return i && (0, u.AH)(["background-color:", ";"], i);
            },
            t.breakpoints.sm,
          );
        }),
        b = u.Ay.div.withConfig({
          displayName: "styles__BannerCarouselInfo",
          componentId: "sc-1ayx0o0-3",
        })(["", ""], function (e) {
          var t = e.theme;
          return (0, u.AH)(
            [
              "display:flex;flex-direction:column;width:100%;gap:",
              ";@media (max-width:",
              "){display:block;}",
            ],
            t.spacings.xxsmall,
            t.breakpoints.md,
          );
        }),
        _ = u.Ay.h4.withConfig({
          displayName: "styles__BannerCarouselTitle",
          componentId: "sc-1ayx0o0-4",
        })(["", ""], function (e) {
          var t = e.theme,
            i = e.textColor;
          return (0, u.AH)(
            [
              "font-family:",
              ";font-size:24px;font-style:normal;font-weight:600;line-height:32px;color:",
              ";",
              " @media (max-width:",
              "){font-size:20px;font-style:normal;font-weight:700;line-height:24px;margin-bottom:4px;}@media (max-width:",
              "){font-size:",
              ";font-style:normal;font-weight:700;line-height:24px;}",
            ],
            t.font.family.secondary,
            t.colors.white,
            function () {
              return i && (0, u.AH)(["color:", ";"], i);
            },
            t.breakpoints.md,
            t.breakpoints.sm,
            t.font.sizes.large,
          );
        }),
        C = u.Ay.p.withConfig({
          displayName: "styles__BannerCarouselText",
          componentId: "sc-1ayx0o0-5",
        })(["", ""], function (e) {
          var t = e.theme,
            i = e.textColor;
          return (0, u.AH)(
            [
              "font-family:",
              ";font-size:",
              ";font-style:normal;font-weight:400;line-height:18px;color:",
              ";",
              " @media (max-width:",
              "){font-size:",
              ";}",
            ],
            t.font.family.secondary,
            t.font.sizes.small,
            t.colors.white,
            function () {
              return i && (0, u.AH)(["color:", ";"], i);
            },
            t.breakpoints.md,
            t.font.sizes.xsmall,
          );
        }),
        v = u.Ay.a.withConfig({
          displayName: "styles__BannerCarouselButton",
          componentId: "sc-1ayx0o0-6",
        })(["", ""], function (e) {
          var t = e.theme,
            i = e.textColor;
          return (0, u.AH)(
            [
              "display:flex;justify-content:center;align-items:center;width:100%;max-width:172px;height:",
              ";gap:",
              ";border:1px solid ",
              ";border-radius:",
              ";margin-left:72px;font-family:",
              ";font-style:normal;font-weight:600;line-height:24px;cursor:pointer;color:",
              ";transition:all ease-in-out 0.25s;:hover{opacity:0.7;}",
              " @media (max-width:",
              "){border:none;height:fit-content;width:fit-content;margin-top:8px;margin-left:0;font-size:14px;font-style:normal;font-weight:600;line-height:16px;}@media (max-width:",
              "){font-size:12px;line-height:14px;}",
            ],
            t.spacings.xlarge,
            t.spacings.xxsmall,
            i,
            t.border.radius.medium,
            t.font.family.secondary,
            t.colors.white,
            function () {
              return i && (0, u.AH)(["color:", ";"], i);
            },
            t.breakpoints.md,
            t.breakpoints.sm,
          );
        }),
        k = u.Ay.div.withConfig({
          displayName: "styles__ContainerInfo",
          componentId: "sc-1ayx0o0-7",
        })(["", ""], function (e) {
          var t = e.theme;
          return (0, u.AH)(
            [
              "display:flex;justify-content:space-between;align-items:center;width:100%;@media (max-width:",
              "){display:initial;}",
            ],
            t.breakpoints.md,
          );
        }),
        j = i(54587),
        A = i.n(j);
      function z(e) {
        var t = e.banners,
          i = {
            vermelho: "#8C1620",
            azul: "#0B8ABC",
            amarelo: "#F2DF80",
            verde: "#3F924D",
            laranja: "#FF8C56",
            branco: "#ffffff",
            roxo_violeta: "#A500FF",
            azul_escuro: "#2c417a",
            azul_allianca_primary_semi_light: "#334C8F",
            azul_allianca_secondary_dark: "#0F3A7A",
            azul_allianca_secondary_main: "#074EB8",
            azul_allianca_secondary_medium: "#095FE0",
            azul_allianca_secondary_semi_light: "#1D74F5",
            azul_allianca_secondary_light: "#3180F5",
            cinza_neutral_litghtest: "#F5F5F5",
            cinza_neutral_light: "#E0E0E0",
          };
        return t.length
          ? (0, o.jsx)(f, {
              children: (0, o.jsx)(w, {
                isBannerDefault: 1 == t.length,
                children: (0, o.jsx)(m.RC, {
                  modules: [c.dK, c.Vx, c.Ij, c.Jq],
                  autoplay: { delay: 8e3, disableOnInteraction: !1 },
                  slidesPerView: t.length > 1 ? "auto" : 1,
                  loop: t.length > 1,
                  pagination: { clickable: !1 },
                  navigation: !0,
                  loopFillGroupWithBlank: !0,
                  watchSlidesProgress: !0,
                  allowSlideNext: !0,
                  children: t.map(function (e, t) {
                    return (0, o.jsx)(
                      m.qr,
                      {
                        children: (0, o.jsxs)(y, {
                          backgroundColor: i[e.backgroundColor],
                          children: [
                            (0, o.jsx)(g, {
                              image: e.imageUrl,
                              imageMobile: e.imageMobileUrl,
                              imageAlt: e.imageAlt,
                              imageMobileAlt: e.imageMobileAlt,
                            }),
                            (0, o.jsxs)(k, {
                              children: [
                                (0, o.jsxs)(b, {
                                  children: [
                                    (0, o.jsx)(_, {
                                      textColor: i[e.textColor],
                                      dangerouslySetInnerHTML: {
                                        __html: e.title || "",
                                      },
                                    }),
                                    (0, o.jsx)(C, {
                                      textColor: i[e.textColor],
                                      dangerouslySetInnerHTML: {
                                        __html: e.description || "",
                                      },
                                    }),
                                  ],
                                }),
                                (0, o.jsxs)(v, {
                                  id: "link-".concat(
                                    (0, h.UJ)(e.cta.title),
                                    "-carousel",
                                  ),
                                  textColor: i[e.textColor],
                                  href: e.cta.link,
                                  target: e.cta.target,
                                  children: [
                                    e.cta.title,
                                    (0, o.jsx)(A(), {
                                      src: "./index_files/arrow-forward-branca.svg",
                                      width: "16",
                                      height: "16",
                                      alt: "",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      t,
                    );
                  }),
                }),
              }),
            })
          : (0, o.jsx)(o.Fragment, {});
      }
      var N = u.Ay.h2.withConfig({
          displayName: "styles__Title",
          componentId: "sc-xxepxd-0",
        })(["", ""], function (e) {
          var t = e.theme;
          return (0, u.AH)(
            [
              "font-family:",
              ";font-size:24px;font-weight:",
              ";color:",
              ";margin-bottom:",
              ";@media (max-width:",
              "){font-size:18px;}",
            ],
            t.font.family.secondary,
            t.font.bold,
            t.colors["neutral-color-black"],
            t.spacings.medium,
            t.breakpoints.md,
          );
        }),
        B = u.Ay.p.withConfig({
          displayName: "styles__Description",
          componentId: "sc-xxepxd-1",
        })(["", ""], function (e) {
          var t = e.theme;
          return (0, u.AH)(
            [
              "font-family:",
              ";font-size:16px;font-weight:",
              ";color:",
              ";margin-bottom:",
              ";@media (max-width:",
              "){font-size:14px;}",
            ],
            t.font.family.secondary,
            t.font.normal,
            t.colors["neutral-color-black"],
            t.spacings.medium,
            t.breakpoints.md,
          );
        }),
        F = u.Ay.a.withConfig({
          displayName: "styles__Cta",
          componentId: "sc-xxepxd-2",
        })(["", ""], function (e) {
          var t = e.theme;
          return (0, u.AH)(
            [
              "width:fit-content;padding:16px 40px;border-radius:",
              ";border:2px solid ",
              ";font-family:",
              ";font-weight:",
              ";font-size:",
              ";color:",
              ";line-height:24px;transition:ease-in-out 0.2s;cursor:pointer;@media (max-width:",
              "){width:100%;text-align:center;font-size:",
              ";line-height:18px;}",
            ],
            t.border.radius.medium,
            t.colors["brand-color-cdb-primary"],
            t.font.family.secondary,
            t.font.bold,
            t.font.sizes.medium,
            t.colors["brand-color-cdb-primary"],
            t.breakpoints.md,
            t.font.sizes.small,
          );
        }),
        H = function (e) {
          var t = e.isOpen,
            i = e.exibirNoSite,
            n = e.title,
            a = e.description,
            r = e.ctaText,
            s = e.ctaLink,
            l = e.ctaTarget,
            d = e.onClosePopUp;
          if (i)
            return (0, o.jsx)("div", {
              id: "background",
              className: "".concat(
                t ? "flex" : "hidden",
                " justify-center items-center top-0 right-0 bottom-0 left-0 fixed w-full h-screen bg-[rgba(0,0,0,0.2)] z-[4000] overflow-y-auto",
              ),
              onClick: function (e) {
                "background" === e.target.id && d();
              },
              children: (0, o.jsx)("div", {
                className:
                  "w-full max-w-[440px] p-10 m-6 rounded-lg z-[5000] bg-neutral-white md:p-16",
                children: (0, o.jsxs)("div", {
                  className: "flex flex-col items-center justify-center w-full",
                  children: [
                    (0, o.jsx)(N, { dangerouslySetInnerHTML: { __html: n } }),
                    (0, o.jsx)(B, { dangerouslySetInnerHTML: { __html: a } }),
                    (0, o.jsx)(F, { target: l, href: s, children: r }),
                  ],
                }),
              }),
            });
        },
        I = i(1406),
        L = i(3816),
        S = (0, a.createContext)({});
      function P(e) {
        var t = e.children,
          i = e.data,
          n = i.exibirNoSite,
          r = i.title,
          s = i.description,
          l = i.link,
          d = i.cta,
          c = i.target,
          m = (0, a.useContext)(L.B).isOpen,
          h = (0, a.useState)(!1),
          p = h[0],
          u = h[1],
          x = (0, a.useCallback)(
            function () {
              u(!p);
            },
            [p],
          ),
          g = function () {
            var e = new Date().toISOString().split("T")[0];
            (u(!p), (0, I.LQ)("lastVisit", e));
          };
        return (
          (0, a.useEffect)(function () {
            !m && (0, I.k2)() && n && x();
          }, []),
          (0, a.useEffect)(
            function () {
              document.body.style.overflow = p ? "hidden" : "scroll";
            },
            [p],
          ),
          (0, o.jsxs)(S.Provider, {
            value: { togglePopUp: g, isOpen: p },
            children: [
              t,
              (0, o.jsx)(a.Suspense, {
                children: (0, o.jsx)(H, {
                  isOpen: p,
                  exibirNoSite: n,
                  title: r,
                  description: s,
                  ctaLink: l,
                  ctaText: d,
                  ctaTarget: c,
                  onClosePopUp: g,
                }),
              }),
            ],
          })
        );
      }
      var T = i(64669),
        M = i(26040);
      (i(18019), i(78528));
      var D = i(16870),
        E = !0;
      function O(e) {
        var t = e.essentialPageData,
          i = e.bannersCarousel,
          a = e.cardsList,
          l = e.alertMessage,
          c = e.blogArticles,
          m = e.hasBlog,
          h = t.defaultRegion,
          p = D.M[t.brand];
        return (0, o.jsx)(P, {
          data: h.popup,
          children: (0, o.jsx)(T.A, {
            isHome: !0,
            footer: h.footer,
            domain: h.domain,
            regionCode: h.code,
            regionName: h.name,
            regions: t.regions,
            logoURL: t.seoPageData.logoURL,
            scheduleLink: h.scheduleLink,
            socialMediasByBrand: h.socialMedias,
            showPrices: t.featureFlags.showPrices,
            scheduleDoctorLink: h.scheduleDoctorLink,
            schedulePatientLink: h.schedulePatientLink,
            scheduleCartLink: h.scheduleCartLink,
            scheduleBrand: h.scheduleBrand,
            header: h.header,
            siteName: t.seoPageData.pageSiteName,
            brand: t.brand,
            showFloatingButtonContact: h.showFloatingButtonContact,
            showFloatingButtonWhatsapp: h.showFloatingButtonWhatapp,
            OCR: t.bannerOCR,
            brandName: h.brandName,
            children: (0, o.jsxs)(M.J3, {
              children: [
                (0, o.jsx)(r, { message: l }),
                (0, o.jsx)(n.z7, {
                  headerBanner: h.headerBanner,
                  cards: h.cards,
                  scheduleBrand: h.scheduleBrand,
                  featureFlag: p,
                }),
                (0, o.jsx)(d, { hide: !i.length }),
                (0, o.jsx)(z, { banners: i }),
                (0, o.jsx)(n.$T, {
                  featureFlag: p,
                  cardsList: a,
                  regionCode: h.code,
                  showPrices: t.featureFlags.showPrices,
                }),
                (0, o.jsx)(n.oL, { banners: h.banners || [] }),
                m &&
                  c.length > 0 &&
                  (0, o.jsx)(s.L, {
                    articles: c,
                    brand: t.brand,
                    title: "Cuide da sua sa\xfade com informa\xe7\xe3o",
                    subtitle:
                      "Sa\xfade explicada de forma clara e pr\xe1tica para o seu dia a dia",
                  }),
              ],
            }),
          }),
        });
      }
    },
  },
  (e) => {
    (e.O(0, [636, 6593, 8792], () => e((e.s = 16760))), (_N_E = e.O()));
  },
]);
