export default function SectionBlock({ id, title, content, children }) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-3 pb-2 border-b border-gray-200">{title}</h2>
      {content && <p className="text-gray-700 leading-relaxed">{content}</p>}
      {children}
    </section>
  )
}