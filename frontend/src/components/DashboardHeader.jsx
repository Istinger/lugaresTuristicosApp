export default function DashboardHeader() {
  return (
    <header className="sticky top-0 bg-[#fbfaf9]/90 backdrop-blur-md px-6 pt-10 pb-4 flex justify-between items-center z-30">
      <div>
        <h1 className="font-editorial text-2xl font-bold text-primary">
          ¡Hola, Mateo!
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Quito · 18°C
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeoHP9UABZk01VxhPY-U8kVATligNtvS0q7JZXeFS-AL-NEoE3rAbShF_ZIwfzFWvsFq2mNvBx_FTJNqsVxDejjgxVqZ8hewSxBwMrsuGcvV8j-n8fA6UtIClKaYM7CvklxF9udhf2mbJEkdKtc79Iw-1KcCUT06ePTWKTE14YmGoUMoiuwio3nmrVwxLBOYnY0xpS3Okb-pNdLnJtcd6ysVhB3ERWCC86XANMH7orumMRlCCwotV4jMrOlzhu19hBYW-Lf9PgxIg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
        />
      </div>
    </header>
  )
}
