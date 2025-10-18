import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* ヘッダー */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              自己紹介
            </a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              スキル
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              プロジェクト
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              お問い合わせ
          </a>
        </div>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-6 py-12">
        {/* ヒーローセクション */}
        <section className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="https://avatars.githubusercontent.com/u/225384525?v=4"
                alt="Kanharuto's Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            こんにちは、私は
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kanharuto
            </span>
            です
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            高校2年生として、法律とバイブコーディングの分野で学びを深めています。
            将来は法律の専門知識とプログラミングスキルを活かして、
            社会に貢献できる人材になることを目指しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl">
              プロジェクトを見る
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-full transition-colors">
              お問い合わせ
            </button>
          </div>
        </section>

        {/* 自己紹介セクション */}
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            自己紹介
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                私について
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                私は高校2年生のKanharutoです。法律とバイブコーディングの両方に興味を持ち、
                日々学習に励んでいます。法律の論理的思考とプログラミングの創造性を組み合わせて、
                新しい価値を生み出したいと考えています。
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                現在は学校での学習と並行して、個人プロジェクトにも取り組んでいます。
                将来は法律の専門知識とプログラミングスキルを活かして、
                テクノロジーと法制度の橋渡しができる人材になることを目標としています。
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                  法律
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">
                  バイブコーディング
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium">
                  プログラミング
                </span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-medium">
                  学習中
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                基本情報
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">名前:</span>
                  <span className="text-gray-800 dark:text-white font-medium">Kanharuto</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">学年:</span>
                  <span className="text-gray-800 dark:text-white font-medium">高校2年生</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">年齢:</span>
                  <span className="text-gray-800 dark:text-white font-medium">17歳</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">専門分野:</span>
                  <span className="text-gray-800 dark:text-white font-medium">法律・バイブコーディング</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* スキルセクション */}
        <section id="skills" className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            スキル
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                法律
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• 憲法・民法・刑法</li>
                <li>• 法的思考力</li>
                <li>• 判例研究</li>
                <li>• 法解釈</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                バイブコーディング
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• プログラミング基礎</li>
                <li>• アルゴリズム思考</li>
                <li>• 問題解決能力</li>
                <li>• 論理的思考</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                学習・成長
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• 継続的な学習</li>
                <li>• 新しい技術への挑戦</li>
                <li>• プロジェクト経験</li>
                <li>• コミュニケーション</li>
              </ul>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section id="contact" className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            お問い合わせ
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            プロジェクトのご相談やお仕事のご依頼がございましたら、
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:haruto.kan.bmx@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              メールで連絡
            </a>
        <a
              href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-full transition-colors"
            >
              GitHub
        </a>
        <a
              href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-full transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Kanharuto. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
