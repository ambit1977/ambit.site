import { content } from '../lib/content';

export default function About() {
  const { about } = content;
  const hasExperience = about.experience && about.experience.length > 0;

  return (
    <section id="about" className="py-[80px] md:py-[140px] border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="divider-label mb-6 md:mb-8">{about.label} / 秋山大志という選択</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* 左: 写真 + 名前 / 肩書き */}
          <div className="lg:col-span-5">
            {/* Photo */}
            {about.photo && (
              <div className="mb-8 md:mb-10 max-w-[320px] md:max-w-[360px]">
                <div className="aspect-[4/5] overflow-hidden rounded-lg border border-hair bg-mist">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={about.photo}
                    alt={`${about.name} - ${about.role}`}
                    className="w-full h-full object-cover object-top"
                    width="360"
                    height="450"
                  />
                </div>
              </div>
            )}

            <p className="font-mono text-[12px] text-caption tracking-[0.1em] mb-3">
              {about.nameEn.toUpperCase()}
            </p>
            <h2 className="font-jp text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.2] mb-5">
              {about.name}
            </h2>
            <p className="font-jp text-[14px] md:text-[15px] text-sub mb-8 leading-[1.85]">
              {about.role}
            </p>

            <p className="font-jp text-[20px] md:text-[24px] lg:text-[26px] font-medium leading-[1.55] tracking-tight">
              <span className="italic font-normal">{about.catchphrase}</span>
            </p>
          </div>

          {/* 右: bio + credentials */}
          <div className="lg:col-span-7">
            <div className="prose-jp space-y-5 md:space-y-6 mb-10 md:mb-14">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="font-jp text-[15px] md:text-[17px] leading-[1.95] text-ink">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="border-t border-hair mb-10 md:mb-14">
              {about.credentials.map((c) => (
                <div
                  key={c.label}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-4 md:py-5 border-b border-hair"
                >
                  <dt className="sm:col-span-3 cat-label pt-1">{c.label}</dt>
                  <dd className="sm:col-span-9 font-jp text-[14px] md:text-[15px] leading-[1.85]">
                    {c.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Experience timeline */}
            {hasExperience && (
              <div>
                <div className="cat-label mb-5">Experience / 経歴ハイライト</div>
                <ol className="space-y-4 md:space-y-5">
                  {about.experience.map((e, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-12 gap-3 md:gap-5 py-4 border-b border-hair last:border-b-0"
                    >
                      <div className="col-span-12 sm:col-span-3 font-mono text-[12px] md:text-[13px] text-caption tracking-[0.06em] pt-0.5">
                        {e.period}
                      </div>
                      <div className="col-span-12 sm:col-span-9">
                        <div className="font-jp text-[15px] md:text-[16px] font-semibold mb-1 leading-[1.5]">
                          {e.role}
                          {e.org && (
                            <span className="font-normal text-sub ml-2 text-[14px]">
                              / {e.org}
                            </span>
                          )}
                        </div>
                        {e.note && (
                          <p className="font-jp text-[13px] md:text-[14px] leading-[1.85] text-sub">
                            {e.note}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
