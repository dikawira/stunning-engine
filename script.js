// DATA HANDBOOK LENGKAP
    const HANDBOOK_DATA = [
      {
        category: "STRUKTUR",
        pages: [
          {
            id: "chain",
            title: "Chain of Command",
            subtitle: "Struktur hirarki kepemimpinan dan jenjang jabatan resmi LSPD.",
            icon: "★",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- High Command -->
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-amber-500 space-y-3">
                  <div class="flex items-center justify-between">
                    <h3 class="font-bold text-amber-400 uppercase text-sm tracking-wider">High Command</h3>
                    <span class="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono">HC</span>
                  </div>
                  <p class="text-xs text-slate-400">Pengambil keputusan tertinggi, perumus kebijakan SOP, dan penanggung jawab penuh departemen.</p>
                  <ul class="space-y-2 text-xs divide-y divide-slate-800">
                    <li class="pt-2 flex justify-between"><strong>Chief of Police</strong> <span class="font-mono text-slate-400">COP</span></li>
                    <li class="pt-2 flex justify-between"><strong>Assistant Chief</strong> <span class="font-mono text-slate-400">ACOP</span></li>
                    <li class="pt-2 flex justify-between"><strong>Deputy Chief</strong> <span class="font-mono text-slate-400">DCOP</span></li>
                  </ul>
                </div>

                <!-- Command Staff -->
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-blue-500 space-y-3">
                  <div class="flex items-center justify-between">
                    <h3 class="font-bold text-blue-400 uppercase text-sm tracking-wider">Command Staff</h3>
                    <span class="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 font-mono">CS</span>
                  </div>
                  <p class="text-xs text-slate-400">Pengawas operasional harian, pimpinan divisi, dan manajemen perwira lapangan.</p>
                  <ul class="space-y-2 text-xs divide-y divide-slate-800">
                    <li class="pt-2 flex justify-between"><strong>Commander</strong> <span class="font-mono text-slate-400">CMDR</span></li>
                    <li class="pt-2 flex justify-between"><strong>Captain</strong> <span class="font-mono text-slate-400">CPT</span></li>
                    <li class="pt-2 flex justify-between"><strong>Lieutenant</strong> <span class="font-mono text-slate-400">LT</span></li>
                  </ul>
                </div>

                <!-- Supervisory & Patrol -->
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-slate-400 space-y-3">
                  <div class="flex items-center justify-between">
                    <h3 class="font-bold text-slate-300 uppercase text-sm tracking-wider">Supervisory & Field</h3>
                    <span class="text-xs px-2 py-0.5 rounded bg-slate-500/10 text-slate-300 font-mono">FLD</span>
                  </div>
                  <p class="text-xs text-slate-400">Supervisor lapangan, detektif penindak hukum, serta elemen utama patroli rutin.</p>
                  <ul class="space-y-2 text-xs divide-y divide-slate-800">
                    <li class="pt-2 flex justify-between"><strong>Sergeant - III</strong> <span class="font-mono text-slate-400">SGT</span></li>
                    <li class="pt-2 flex justify-between"><strong>Officer III - III</strong> <span class="font-mono text-slate-400">PO III</span></li>
                    <li class="pt-2 flex justify-between"><strong>Officer II - III</strong> <span class="font-mono text-slate-400">PO II</span></li>
                    <li class="pt-2 flex justify-between"><strong>Officer I - III</strong> <span class="font-mono text-slate-400">PO I</span></li>
                    <li class="pt-2 flex justify-between"><strong>Cadet / Probationary</strong> <span class="font-mono text-slate-400">CDT</span></li>
                  </ul>
                </div>
              </div>

              <div class="glass-card p-5 rounded-xl border border-slate-800 mt-4 space-y-2">
                <h4 class="text-sm font-bold text-police-gold">Aturan Rantai Komando (Chain of Command Protocol)</h4>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Setiap instruksi dan keluhan wajib disampaikan bertingkat dari bawahan ke atasan langsung. Meloncat hirarki (misal Cadet langsung menghubungi Chief tanpa melalui Sergeant/Lieutenant) merupakan pelanggaran disiplin berat kecuali dalam keadaan darurat ekstrim.
                </p>
              </div>
            `
          },
          {
            id: "divisions",
            title: "Divisi & Biro",
            subtitle: "Unit spesialisasi dan pembagian divisi kerja di lingkungan LSPD.",
            icon: "▣",
            content: `
              <!-- LSPD DIVISION HANDBOOK -->
              <div class="space-y-5">

                <!-- LSPD COMMAND -->
                <details class="glass-card rounded-xl overflow-hidden group" open>
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                        <i data-lucide="shield-check" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">LSPD Command</h3>
                        <p class="text-[11px] text-slate-400">Executive Leadership & Administration</p>
                        <p class="text-xs text-amber-400 mt-1">4 Divisions / Offices</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-amber-500/10 text-amber-400 font-bold font-mono text-sm">BOC</span>
                        <h4 class="font-bold text-white text-sm">Board of Commissioners</h4>
                        <p class="text-[11px] text-slate-400">Executive Oversight</p>
                        <p class="text-xs text-slate-300">Mengawasi kebijakan dan kinerja kepolisian, mengevaluasi kepemimpinan, serta memastikan departemen berjalan sesuai peraturan.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-red-500/10 text-red-400 font-bold font-mono text-sm">CO</span>
                        <h4 class="font-bold text-white text-sm">Chief's Office</h4>
                        <p class="text-[11px] text-slate-400">Department Leadership</p>
                        <p class="text-xs text-slate-300">Memimpin LSPD, menetapkan arahan strategis, mengesahkan kebijakan, dan mengambil keputusan penting bagi departemen.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-blue-500/10 text-blue-400 font-bold font-mono text-sm">ASB</span>
                        <h4 class="font-bold text-white text-sm">Administrative Services Bureau</h4>
                        <p class="text-[11px] text-slate-400">Administrative Management</p>
                        <p class="text-xs text-slate-300">Mengelola dokumen resmi, pengarsipan, laporan internal, administrasi, dan data departemen.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-teal-500/10 text-teal-400 font-bold font-mono text-sm">OO</span>
                        <h4 class="font-bold text-white text-sm">Office of Operations</h4>
                        <p class="text-[11px] text-slate-400">Operational Command</p>
                        <p class="text-xs text-slate-300">Mengatur kegiatan operasional harian, penugasan personel, koordinasi patroli, dan pelaksanaan operasi kepolisian.</p>
                      </div>

                    </div>
                  </div>
                </details>

                <!-- INVESTIGATION & INTELLIGENCE -->
                <details class="glass-card rounded-xl overflow-hidden group">
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                        <i data-lucide="search" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">Investigation &amp; Intelligence</h3>
                        <p class="text-[11px] text-slate-400">Criminal Investigation & Intelligence</p>
                        <p class="text-xs text-purple-400 mt-1">4 Divisions / Bureaus</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-purple-500/10 text-purple-400 font-bold font-mono text-sm">CID</span>
                        <h4 class="font-bold text-white text-sm">Criminal Investigations Division</h4>
                        <p class="text-[11px] text-slate-400">Criminal Case Investigation</p>
                        <p class="text-xs text-slate-300">Menyelidiki tindak kriminal melalui pengumpulan bukti, pemeriksaan saksi, wawancara tersangka, dan penyusunan berkas perkara.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold font-mono text-sm">IB</span>
                        <h4 class="font-bold text-white text-sm">Investigations Bureau</h4>
                        <p class="text-[11px] text-slate-400">Investigative Coordination</p>
                        <p class="text-xs text-slate-300">Mengoordinasikan penyelidikan lintas unit, menangani kasus kompleks, dan menyatukan informasi investigasi.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-rose-500/10 text-rose-400 font-bold font-mono text-sm">GND</span>
                        <h4 class="font-bold text-white text-sm">Gang &amp; Narcotics Division</h4>
                        <p class="text-[11px] text-slate-400">Gang & Narcotics Enforcement</p>
                        <p class="text-xs text-slate-300">Menyelidiki aktivitas geng kriminal, peredaran narkotika, perang antargeng, dan jaringan kriminal terorganisasi.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-pink-500/10 text-pink-400 font-bold font-mono text-sm">IAD</span>
                        <h4 class="font-bold text-white text-sm">Internal Affairs Division</h4>
                        <p class="text-[11px] text-slate-400">Internal Investigations</p>
                        <p class="text-xs text-slate-300">Menyelidiki dugaan pelanggaran anggota, penyalahgunaan wewenang, korupsi, dan pelanggaran prosedur internal.</p>
                      </div>

                    </div>
                  </div>
                </details>

                <!-- FIELD OPERATIONS -->
                <details class="glass-card rounded-xl overflow-hidden group">
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                        <i data-lucide="radio-tower" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">Field Operations</h3>
                        <p class="text-[11px] text-slate-400">Patrol &amp; Tactical Operations</p>
                        <p class="text-xs text-emerald-400 mt-1">5 Divisions / Bureaus</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold font-mono text-sm">PD</span>
                        <h4 class="font-bold text-white text-sm">Patrol Division</h4>
                        <p class="text-[11px] text-slate-400">Uniformed Patrol Operations</p>
                        <p class="text-xs text-slate-300">Menjalankan patroli rutin, merespons panggilan darurat, menjaga keamanan wilayah, menghentikan kendaraan, dan menegakkan hukum.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-neutral-500/10 text-neutral-300 font-bold font-mono text-sm">SWAT</span>
                        <h4 class="font-bold text-white text-sm">SWAT Division</h4>
                        <p class="text-[11px] text-slate-400">Special Weapons &amp; Tactics</p>
                        <p class="text-xs text-slate-300">Menangani situasi berisiko tinggi seperti penyanderaan, tersangka bersenjata, penangkapan berbahaya, dan operasi taktis khusus.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold font-mono text-sm">ASD</span>
                        <h4 class="font-bold text-white text-sm">Air Support Division</h4>
                        <p class="text-[11px] text-slate-400">Aerial Operations</p>
                        <p class="text-xs text-slate-300">Menyediakan dukungan udara untuk pengawasan, pencarian orang, pelacakan tersangka, dan bantuan pengejaran.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-lime-500/10 text-lime-400 font-bold font-mono text-sm">SHD</span>
                        <h4 class="font-bold text-white text-sm">Speed Hunter Division</h4>
                        <p class="text-[11px] text-slate-400">Traffic Enforcement &amp; Pursuit</p>
                        <p class="text-xs text-slate-300">Menindak balap liar, pelanggaran kecepatan, pengemudi berbahaya, dan mendukung pengejaran kendaraan sesuai SOP.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-yellow-500/10 text-yellow-400 font-bold font-mono text-sm">SOB</span>
                        <h4 class="font-bold text-white text-sm">Special Operations Bureau</h4>
                        <p class="text-[11px] text-slate-400">Specialized Operations</p>
                        <p class="text-xs text-slate-300">Merencanakan operasi khusus, mendukung operasi lintas divisi, dan menangani penugasan yang membutuhkan strategi khusus.</p>
                      </div>

                    </div>
                  </div>
                </details>

                <!-- PERSONNEL & SUPPORT -->
                <details class="glass-card rounded-xl overflow-hidden group">
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                        <i data-lucide="users" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">Personnel &amp; Support</h3>
                        <p class="text-[11px] text-slate-400">Human Resources &amp; Department Services</p>
                        <p class="text-xs text-orange-400 mt-1">5 Divisions / Bureaus</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-green-500/10 text-green-400 font-bold font-mono text-sm">HRTD</span>
                        <h4 class="font-bold text-white text-sm">Human Resource &amp; Training Division</h4>
                        <p class="text-[11px] text-slate-400">Personnel &amp; Training</p>
                        <p class="text-xs text-slate-300">Mengelola perekrutan, data personel, pendidikan dasar, pelatihan lanjutan, dan evaluasi kemampuan anggota.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-orange-500/10 text-orange-400 font-bold font-mono text-sm">FLD</span>
                        <h4 class="font-bold text-white text-sm">Firearms Licensing Division</h4>
                        <p class="text-[11px] text-slate-400">Firearms Permit Administration</p>
                        <p class="text-xs text-slate-300">Memproses permohonan, verifikasi, perpanjangan, dan pencabutan izin senjata api sesuai peraturan.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 font-bold font-mono text-sm">MRD</span>
                        <h4 class="font-bold text-white text-sm">Media &amp; Relations Division</h4>
                        <p class="text-[11px] text-slate-400">Public Information &amp; Relations</p>
                        <p class="text-xs text-slate-300">Mengelola hubungan masyarakat, konferensi pers, publikasi resmi, dan komunikasi dengan media.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-slate-500/10 text-slate-300 font-bold font-mono text-sm">OSS</span>
                        <h4 class="font-bold text-white text-sm">Office of Support Services</h4>
                        <p class="text-[11px] text-slate-400">Logistics &amp; Department Support</p>
                        <p class="text-xs text-slate-300">Mengelola kendaraan dinas, perlengkapan, fasilitas, dan kebutuhan logistik operasional departemen.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-violet-500/10 text-violet-400 font-bold font-mono text-sm">PSB</span>
                        <h4 class="font-bold text-white text-sm">Professional Standards Bureau</h4>
                        <p class="text-[11px] text-slate-400">Professional Conduct &amp; Compliance</p>
                        <p class="text-xs text-slate-300">Mengawasi standar profesional, etika, kedisiplinan, kepatuhan terhadap SOP, dan kualitas pelayanan kepolisian.</p>
                      </div>

                    </div>
                  </div>
                </details>

              </div>

            `
          },
          {
            id: "callsigns",
            title: "Callsign System",
            subtitle: "Format dan standar pengidentifikasi unit patroli di radio.",
            icon: "◇",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-4">
                <h3 class="font-bold text-white text-sm">Format Standar Callsign: <span class="font-mono text-police-gold">[PREFIX] - [UNIT NUMBER]</span></h3>
                <div class="overflow-x-auto">
                  <table class="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr class="border-b border-slate-800 text-slate-400 font-mono">
                        <th class="p-2">Prefix</th>
                        <th class="p-2">Jenis Unit</th>
                        <th class="p-2">Jumlah Petugas</th>
                        <th class="p-2">Contoh Callsign</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td class="p-2 font-mono font-bold text-red-400">STAFF (S)</td>
                        <td class="p-2">High Command</td>
                        <td class="p-2">2 Officers</td>
                        <td class="p-2 font-mono">7-STAFF-01</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-blue-400">ADAM (A)</td>
                        <td class="p-2">Patroli Mobil Standar</td>
                        <td class="p-2">2 Officers</td>
                        <td class="p-2 font-mono">71-ADAM-12</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-emerald-400">LINCOLN (L)</td>
                        <td class="p-2">Patroli Solo Officer</td>
                        <td class="p-2">1 Officer</td>
                        <td class="p-2 font-mono">71-LINCON-04</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-purple-400">MARY (M)</td>
                        <td class="p-2">Patroli Sepeda Motor</td>
                        <td class="p-2">1 Officer</td>
                        <td class="p-2 font-mono">71-MARY-01</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-red-400">DAVID (D)</td>
                        <td class="p-2">Unit SWAT / Tactical</td>
                        <td class="p-2">Tim SWAT</td>
                        <td class="p-2 font-mono">DAVID-1</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-amber-400">AIR</td>
                        <td class="p-2">Helikopter Support</td>
                        <td class="p-2">2 Aviators</td>
                        <td class="p-2 font-mono">AIR-1</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-slate-400">HENRY (H)</td>
                        <td class="p-2">Interceptor Unit</td>
                        <td class="p-2">1 Interceptor Unit</td>
                        <td class="p-2 font-mono">71-HENRY-10</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-pink-400">GOLF (G)</td>
                        <td class="p-2">	Interceptor High Command</td>
                        <td class="p-2">1 	Interceptor High Command</td>
                        <td class="p-2 font-mono">71-GOLF-30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            `
          }
        ]
      },
      {
        category: "KOMUNIKASI",
        pages: [
          {
            id: "ten-codes",
            title: "Ten Codes",
            subtitle: "Kode radio standar 10-XX untuk komunikasi cepat dan efisien.",
            icon: "×",
            content: `
 
<!-- LSPD RADIO TEN-CODES -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">

  <!-- COMMUNICATION -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-1</span>
    <span class="text-white text-right">Meet me at / Temui saya di lokasi tertentu</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-2</span>
    <span class="text-white text-right">Good Signal / Sinyal radio bagus</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-3</span>
    <span class="text-white text-right">Stop Transmitting / Kosongkan frekuensi radio</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-4</span>
    <span class="text-white text-right">Roger / Diterima dan dimengerti</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-6</span>
    <span class="text-white text-right">Busy / Sibuk, kecuali panggilan darurat</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-7</span>
    <span class="text-white text-right">Out of Service / Tidak bertugas sementara</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-8</span>
    <span class="text-white text-right">In Service / Siap bertugas</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-9</span>
    <span class="text-white text-right">Repeat / Ulangi transmisi terakhir</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-10</span>
    <span class="text-white text-right">Fight in Progress / Keributan sedang berlangsung</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-12</span>
    <span class="text-white text-right">Stand By / Bersiap dan tunggu instruksi</span>
  </div>

  <!-- EMERGENCY & MEDICAL -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-13A</span>
    <span class="text-white text-right">Officer Down / Petugas tertembak atau darurat</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-13B</span>
    <span class="text-white text-right">Officer Down / Petugas kecelakaan atau pingsan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-14</span>
    <span class="text-white text-right">EMS Down / Petugas medis tumbang</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-18</span>
    <span class="text-white text-right">Quickly / Laksanakan dengan segera</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-20</span>
    <span class="text-white text-right">Location / Lokasi saat ini</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-22</span>
    <span class="text-white text-right">Cancel / Batalkan instruksi sebelumnya</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-23</span>
    <span class="text-white text-right">Arriving on Location / Tiba di TKP</span>
  </div>

  <!-- VEHICLE & SUSPECT INFORMATION -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-28</span>
    <span class="text-white text-right">Info Plate / Informasi plat nomor kendaraan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-29</span>
    <span class="text-white text-right">Criminal Records / Pemeriksaan catatan kriminal</span>
  </div>

  <!-- ROBBERIES & ARMED SUSPECTS -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-31A</span>
    <span class="text-white text-right">House Robbery / Perampokan rumah</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-31B</span>
    <span class="text-white text-right">Store Robbery / Perampokan toko berlangsung</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-32</span>
    <span class="text-white text-right">Man with Firearms / Orang bersenjata api</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-34</span>
    <span class="text-white text-right">Suspicious Behaviour / Aktivitas mencurigakan terkait narkotika</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-37</span>
    <span class="text-white text-right">Suspicious Vehicle / Kendaraan mencurigakan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-38</span>
    <span class="text-white text-right">High Risk Stop / Penghentian kendaraan berisiko tinggi</span>
  </div>

  <!-- DUTY STATUS -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-41</span>
    <span class="text-white text-right">On Duty / Mulai berdinas</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-42</span>
    <span class="text-white text-right">Off Duty / Mengakhiri dinas</span>
  </div>

  <!-- TRAFFIC & PUBLIC SAFETY -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-45</span>
    <span class="text-white text-right">Illegal Hunting / Perburuan liar</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-47</span>
    <span class="text-white text-right">Injured Person / Terdapat korban cedera</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-50</span>
    <span class="text-white text-right">Vehicle Accident / Kecelakaan kendaraan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-52</span>
    <span class="text-white text-right">EMS Needed / Membutuhkan bantuan medis segera</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-55</span>
    <span class="text-white text-right">Traffic Stop / Pemberhentian kendaraan biasa</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-57</span>
    <span class="text-white text-right">Chase in Progress / Pengejaran aktif</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-60</span>
    <span class="text-white text-right">Vehicle Description / Deskripsi kendaraan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-61</span>
    <span class="text-white text-right">Subject Description / Deskripsi tersangka atau orang</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-70</span>
    <span class="text-white text-right">Fire in Progress / Kebakaran berlangsung</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-71</span>
    <span class="text-white text-right">Gang War / Shootout / Perang geng atau baku tembak</span>
  </div>

  <!-- RADIO RESPONSE & BACKUP -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-74</span>
    <span class="text-white text-right">Negative / Tidak, ditolak, atau tidak benar</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-76</span>
    <span class="text-white text-right">En Route / Dalam perjalanan menuju lokasi</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-77</span>
    <span class="text-white text-right">Need Assistance / Meminta bantuan rutin</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-78</span>
    <span class="text-white text-right">Emergency Backup / Meminta bantuan darurat segera</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-80</span>
    <span class="text-white text-right">Officer in Danger / Polisi dalam bahaya dan tidak dapat merespons</span>
  </div>

  <!-- SPECIAL INCIDENTS -->
  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-89</span>
    <span class="text-white text-right">Bomb Threat / Ancaman bom</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-90</span>
    <span class="text-white text-right">Bank/Jewel Robbery / Perampokan bank atau toko perhiasan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-94</span>
    <span class="text-white text-right">Drag Racing / Balapan liar</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-95</span>
    <span class="text-white text-right">Suspect in Custody / Tersangka telah diamankan</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-97</span>
    <span class="text-white text-right">Unauthorized Access / Akses atau penyusupan tanpa izin</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-98</span>
    <span class="text-white text-right">Jailbreak / Pelarian dari penjara</span>
  </div>

  <div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
    <span class="font-bold text-white shrink-0">10-99</span>
    <span class="text-white text-right">Situation Concluded / Situasi selesai dan dinyatakan aman</span>
  </div>

</div>

            `
          },
          {
            id: "response",
            title: "Response Codes",
            subtitle: "Tingkat urgensi respon patroli menuju lokasi kejadian.",
            icon: "◎",
            content: `
              <div class="space-y-4">
                <div class="glass-card p-5 rounded-xl border-l-4 border-l-slate-400">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="font-bold text-slate-200 font-mono text-sm">CODE 1</h3>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-slate-500/20 text-slate-300">Low Priority</span>
                  </div>
                  <p class="text-xs text-slate-300">Respon rutin tanpa sirine dan tanpa lampu hazard. Mematuhi seluruh rambu dan peraturan lalu lintas.</p>
                </div>

                <div class="glass-card p-5 rounded-xl border-l-4 border-l-amber-500">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="font-bold text-amber-400 font-mono text-sm">CODE 2</h3>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Medium Priority</span>
                  </div>
                  <p class="text-xs text-slate-300">Respon cepat. Lampu hazard dinyalakan (Emergency Lights ON), **TANPA SIRINE**. Boleh menerobos lampu merah jika aman.</p>
                </div>

                <div class="glass-card p-5 rounded-xl border-l-4 border-l-red-500">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="font-bold text-red-400 font-mono text-sm">CODE 3</h3>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300">HIGH EMERGENCY</span>
                  </div>
                  <p class="text-xs text-slate-300">Respon darurat tertinggi. **LAMPU HAZARD & SIRINE NYALA MAKSIMAL**. Diizinkan melanggar rambu lalu lintas dengan utamakan keselamatan warga.</p>
                </div>

                <div class="glass-card p-5 rounded-xl border-l-4 border-l-emerald-500">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="font-bold text-emerald-400 font-mono text-sm">CODE 4</h3>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Clear / Under Control</span>
                  </div>
                  <p class="text-xs text-slate-300">Situasi di TKP telah aman terkendali. Unit backup yang sedang menuju lokasi diizinkan membatalkan respon / kembali patroli rutin.</p>
                </div>
              </div>
            `
          },
          {
            id: "priority",
            title: "Priority & Threat Level",
            subtitle: "Tingkat ancaman keamanan kota dan protokol pertahanan.",
            icon: "△",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-emerald-500 space-y-2">
                  <div class="font-mono font-bold text-emerald-400 text-sm">GREEN - LOW THREAT</div>
                  <p class="text-xs text-slate-300">Kondisi kota kondusif. Patroli rutin biasa berjalan normal. Cadet diizinkan patroli dengan pendampingan Standard Officer.</p>
                </div>
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-amber-500 space-y-2">
                  <div class="font-mono font-bold text-amber-400 text-sm">AMBER - ELEVATED</div>
                  <p class="text-xs text-slate-300">Peningkatan kriminalitas sedang/perampokan bank aktif. Officer diimbau membawa vest anti-peluru dan senjata jarak menengah.</p>
                </div>
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-red-600 space-y-2">
                  <div class="font-mono font-bold text-red-500 text-sm">RED - HIGH THREAT / LOCKDOWN</div>
                  <p class="text-xs text-slate-300">Ancaman terorisme/penembakan beruntun/geng perang terbuka. Seluruh unit wajib bergabung dalam patroli Adam (min 2 orang per car) & SWAT siaga penuh.</p>
                </div>
              </div>
            `
          },
          {
            id: "radio",
            title: "Radio Abbreviations",
            subtitle: "Singkatan frase populer yang dipakai dalam komunikasi radio.",
            icon: "≡",
            content: `
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">ETA:</b> Estimated Time of Arrival</div>
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">GOA:</b> Gone On Arrival</div>
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">RO:</b> Reporting Officer</div>
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">POV:</b> Privately Owned Vehicle</div>
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">GSR:</b> Gunshot Residue</div>
                <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">SO:</b> Suspect / Offender</div>
              </div>
            `
          },
          {
            id: "radio-use",
            title: "Penggunaan Radio",
            subtitle: "Etika dan prosedur transmisi suara di frekuensi utama LSPD.",
            icon: "▣",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-4 text-xs text-slate-300 leading-relaxed">
                <h3 class="font-bold text-white text-sm">Aturan Emas Transmisi Radio:</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li><b>Clear & Concise:</b> Sampaikan pesan dengan singkat, padat, dan jelas. Jangan gunakan radio untuk mengobrol santai (chitchat).</li>
                  <li><b>Break Protocol:</b> Jika menyebutkan info panjang, gunakan kata <i>"Break"</i> per 5 detik agar saluran radio tidak terkunci penuh.</li>
                  <li><b>Emergency Silence:</b> Jika ada panggilan <b>10-13 / Code 3</b>, saluran radio terkunci khusus untuk unit pelapor dan supervisor hingga status aman.</li>
                </ul>
              </div>
            `
          }
        ]
      },
      {
        category: "PROSEDUR",
        pages: [
          {
            id: "arrest",
            title: "Prosedur Penangkapan",
            subtitle: "Langkah baku pengamanan tersangka di lapangan (Arrest Protocol).",
            icon: "ⓘ",
            content: `
              <div class="space-y-4 text-xs">
                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">1</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Pemberhentian & Penjinakan Threat</h4>
                    <p class="text-slate-300">Perintahkan tersangka untuk tiarap / angkat tangan (Verbal Command). Jika melawan, gunakan Taser / Less-Lethal force terlebih dahulu.</p>
                  </div>
                </div>

                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">2</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Pengendalian & Pengborgolan (Cuffing)</h4>
                    <p class="text-slate-300">Pasang borgol dari belakang posisi tersangka. Pastikan posisi aman dari kemungkinan tersangka menarik senjata tersembunyi.</p>
                  </div>
                </div>

                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">3</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Penggeledahan Badan (Pat Down / Search)</h4>
                    <p class="text-slate-300">Geledah saku, pakaian, dan tas tersangka. Amankan barang bukti kejahatan dan senjata berbahaya. Catat barang yang disita.</p>
                  </div>
                </div>

                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">4</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Pembacaan Hak Miranda (Miranda Rights)</h4>
                    <p class="text-slate-300">Wajib membacakan Hak Miranda setelah tersangka diborgol dan sebelum pemeriksaan resmi diajukan.</p>
                  </div>
                </div>
              </div>
            `
          },
          {
            id: "suspect",
            title: "Memproses Suspect",
            subtitle: "Prosedur booking tersangka di Station Mission Row.",
            icon: "②",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Alur Pemrosesan di Kantor Polisi:</h3>
                <ol class="list-decimal pl-5 space-y-2">
                  <li>Bawa tersangka ke ruang interogasi / area Cell Mission Row PD.</li>
                  <li>Uji tes GSR (Gunshot Residue) atau tes alkohol jika terkait kasus penembakan / berkendara mabuk.</li>
                  <li>Masukkan data pelanggaran ke dalam MDT (MDT Record Creation).</li>
                  <li>Hitung akumulasi pasal hukuman penjara dan denda denda sesuai <b>Penal Code</b>.</li>
                  <li>Pindahkan tersangka ke dalam tahanan utama atau koordinasikan pemindahan ke Bolingbroke Penitentiary jika masa hukuman berat.</li>
                </ol>
              </div>
            `
          },
          {
            id: "mdt",
            title: "Penggunaan MDT",
            subtitle: "Panduan pengoperasian Mobile Data Terminal kepolisian.",
            icon: "▤",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Fungsi Utama MDT:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
                    <b class="text-police-gold">Citizen Search:</b> Memeriksa lisensi mengemudi, lisensi Senjata, riwayat kriminalitas pasif, dan status buronan (Warrant).
                  </div>
                  <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
                    <b class="text-police-gold">Vehicle Database:</b> Pengecekan plat nomor kendaraan, pemilik sah, dan laporan pencurian (Stolen Vehicle).
                  </div>
                  <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
                    <b class="text-police-gold">Create Incident Report:</b> Dokumentasi laporan perkara TKP, nama officer bertugas, serta daftar barang bukti.
                  </div>
                  <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
                    <b class="text-police-gold">Issue Warrant:</b> Mengajukan surat perintah penangkapan buronan atas persetujuan Detective / High Command.
                  </div>
                </div>
              </div>
            `
          },
          {
            id: "impound",
            title: "Impound Kendaraan",
            subtitle: "Aturan penyitaan kendaraan ilegal atau tidak layak jalan.",
            icon: "♧",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Kriteria Kendaraan Wajib Impound:</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Kendaraan yang ditinggalkan di tengah jalan umum dan mengganggu lalu lintas.</li>
                  <li>Kendaraan hasil kejahatan/perampokan (Crime Scene Evidence).</li>
                  <li>Kendaraan yang dikemudikan tanpa lisensi/STNK yang valid.</li>
                  <li>Kendaraan yang terlibat dalam aksi 10-80 (Pursuit) dan pengemudi berhasil melarikan diri.</li>
                </ul>
              </div>
            `
          },
          {
            id: "miranda",
            title: "BLS & Miranda Rights",
            subtitle: "Pertolongan pertama dan pembacaan hak konstitusi tersangka.",
            icon: "✚",
            content: `
              <div class="space-y-4">
                <div class="glass-card p-5 rounded-xl border-l-4 border-l-amber-500">
                  <h3 class="font-bold text-amber-400 text-sm mb-2 font-mono">TEKS RESMI MIRANDA RIGHTS</h3>
                  <blockquote class="italic text-slate-200 text-xs leading-relaxed bg-dark-900/60 p-4 rounded-lg border border-slate-800">
                    "Anda memiliki hak untuk diam. Apa pun yang Anda katakan dapat dan akan digunakan melawan Anda di pengadilan hukum. Anda berhak atas kehadiran seorang pengacara selama pemeriksaan. Jika Anda tidak mampu menyewa pengacara, seorang pengacara akan ditunjuk untuk Anda oleh negara. Apakah Anda memahami hak-hak ini saat saya membacakannya kepada Anda?"
                  </blockquote>
                </div>

                <div class="glass-card p-5 rounded-xl border-l-4 border-l-red-500">
                  <h3 class="font-bold text-red-400 text-sm mb-2">BLS (Basic Life Support) Prosedur</h3>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    Jika suspek atau warga sipil mengalami pendarahan/tidak sadarkan diri di TKP, lakukan BLS segera (Balut tekan luka, posisikan pemulihan, CPR jika napas terhenti) sambil memanggil unit EMS / Paramedis. Keselamatan jiwa selalu menjadi prioritas di atas pemeriksaan dokumen.
                  </p>
                </div>
              </div>
            `
          },
          {
            id: "conduct",
            title: "Peraturan Internal",
            subtitle: "Kode etik dan standar perilaku anggota kepolisian LSPD.",
            icon: "⌁",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Larangan Keras (Zero Tolerance):</h3>
                <ul class="list-disc pl-5 space-y-2 text-red-300">
                  <li>Dilarang keras menyalahgunakan kewenangan atau menerima suap (Korupsi).</li>
                  <li>Dilarang menggunakan fasilitas/senjata dinas di luar jam tugas resmi.</li>
                  <li>Dilarang membocorkan rahasia data MDT / identitas perwira undercover kepada pihak sipil/kriminal.</li>
                  <li>Dilarang bersikap tidak sopan atau kasar secara berlebihan tanpa alasan RP yang valid.</li>
                </ul>
              </div>
            `
          }
        ]
      },
      {
        category: "HUKUM & PERLENGKAPAN",
        pages: [
          {
            id: "penal",
            title: "Penal Code",
            subtitle: "Daftar ringkas pasal kitab undang-undang pidana kota.",
            icon: "§",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-4">
                <div class="overflow-x-auto">
                  <table class="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr class="border-b border-slate-800 text-slate-400 font-mono">
                        <th class="p-2">Kode Pasal</th>
                        <th class="p-2">Nama Pelanggaran / Kejahatan</th>
                        <th class="p-2">Denda ($)</th>
                        <th class="p-2">Hukuman Penjara</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-800/60 text-slate-300 font-mono">
                      <tr>
                        <td class="p-2 text-amber-400">PC 101</td>
                        <td class="p-2">Speeding (Melebihi Batas Kecepatan)</td>
                        <td class="p-2 text-emerald-400">$500</td>
                        <td class="p-2">0 Bulan</td>
                      </tr>
                      <tr>
                        <td class="p-2 text-amber-400">PC 105</td>
                        <td class="p-2">Reckless Driving (Berkendara Ugal-ugalan)</td>
                        <td class="p-2 text-emerald-400">$1,200</td>
                        <td class="p-2">5 Bulan</td>
                      </tr>
                      <tr>
                        <td class="p-2 text-red-400">PC 201</td>
                        <td class="p-2">Evading Police (Kabur dari Kejaran Polisi)</td>
                        <td class="p-2 text-emerald-400">$3,500</td>
                        <td class="p-2">15 Bulan</td>
                      </tr>
                      <tr>
                        <td class="p-2 text-red-400">PC 302</td>
                        <td class="p-2">Illegal Firearm Possession (Senjata Ilegal)</td>
                        <td class="p-2 text-emerald-400">$5,000</td>
                        <td class="p-2">20 Bulan</td>
                      </tr>
                      <tr>
                        <td class="p-2 text-red-500 font-bold">PC 401</td>
                        <td class="p-2">Armed Robbery (Perampokan Bersenjata)</td>
                        <td class="p-2 text-emerald-400">$10,000</td>
                        <td class="p-2">35 Bulan</td>
                      </tr>
                      <tr>
                        <td class="p-2 text-red-500 font-bold">PC 501</td>
                        <td class="p-2">Attempted Murder of Officer</td>
                        <td class="p-2 text-emerald-400">$20,000</td>
                        <td class="p-2">60 Bulan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            `
          },
          {
            id: "weapons",
            title: "Peralatan Kepolisian",
            subtitle: "Standard Issue Equipment untuk seluruh petugas patroli.",
            icon: "▤",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-blue-500">
                  <h4 class="font-bold text-white mb-1">Combat Pistol / Service Weapon</h4>
                  <p class="text-slate-300">Senjata api standar. Penggunaan harus sesuai Prosedur Use of Force (Lethal Force hanya jika ada ancaman mematikan).</p>
                </div>
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-amber-500">
                  <h4 class="font-bold text-white mb-1">Stun Gun / Taser X2</h4>
                  <p class="text-slate-300">Senjata melumpuhkan jarak dekat non-lethal untuk suspek yang agresif secara fisik namun tidak bersenjata api.</p>
                </div>
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-slate-400">
                  <h4 class="font-bold text-white mb-1">Nightstick / Baton</h4>
                  <p class="text-slate-300">Tongkat pemukul untuk mengendalikan kerusuhan massa / pertahanan diri jarak dekat.</p>
                </div>
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-emerald-500">
                  <h4 class="font-bold text-white mb-1">Spike Strips & Radar Gun</h4>
                  <p class="text-slate-300">Peralatan taktis jalan raya untuk menghentikan Pengejaran Kendaraan & pengukur kecepatan lalu lintas.</p>
                </div>
              </div>
            `
          },
          {
            id: "pursuit",
            title: "Vehicle Pursuit",
            subtitle: "SOP dan manuver taktis dalam kejar-kejaran kendaraan (10-80).",
            icon: "➤",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-4 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Taktik Pengejaran Terotorisasi:</h3>
                <div class="space-y-3">
                  <div class="p-3 bg-dark-900/70 rounded-lg">
                    <b class="text-police-gold">Primary Unit:</b> Mobil patroli terdepan yang memimpin pursuit. Fokus mengemudi dan melaporkan pergerakan jalan.
                  </div>
                  <div class="p-3 bg-dark-900/70 rounded-lg">
                    <b class="text-police-gold">Secondary Unit:</b> Mobil patroli kedua di belakang primary. Mengambil alih komunikasi radio penuh agar Primary fokus mengemudi.
                  </div>
                  <div class="p-3 bg-dark-900/70 rounded-lg">
                    <b class="text-police-gold">PIT Maneuver (Precision Immobilization Technique):</b> Diizinkan hanya oleh Sergeant+ pada kecepatan di bawah 50 MPH dan di area aman dari pejalan kaki.
                  </div>
                </div>
              </div>
            `
          },
          {
            id: "training",
            title: "Training & Recruitment",
            subtitle: "Jalur karir, pelatihan akademi, dan ujian sertifikasi.",
            icon: "✦",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Tahapan Rekrutmen LSPD:</h3>
                <ol class="list-decimal pl-5 space-y-2">
                  <li><b>Pendaftaran Berkas & Form Aplikasi Web</b></li>
                  <li><b>Ujian Wawancara Psikologi & Pengetahuan SOP</b></li>
                  <li><b>Pelatihan Akademi LSPD (Physical & Radio Test)</b></li>
                  <li><b>Masa Percobaan Cadet (Probationary Field Duty)</b></li>
                  <li><b>Kelulusan Menjadi Officer I Full-Pledge</b></li>
                </ol>
              </div>
            `
          }
        ]
      }
    ];

    let currentPageId = "chain";

    // Flatten pages list untuk mencari index/nomor modul secara urut
    const ALL_PAGES = HANDBOOK_DATA.flatMap(cat => cat.pages);

    // INITIALIZE APP
    window.onload = function() {
      renderNavigation();
      loadPage(currentPageId);

      // Keyboard Shortcut for Search
      document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          document.getElementById('searchInput').focus();
        }
      });
    };

    // RENDER SIDEBAR NAVIGATION
    function renderNavigation(filter = "") {
      const navContainer = document.getElementById('navContainer');
      navContainer.innerHTML = "";

      HANDBOOK_DATA.forEach(cat => {
        // Filter pages based on search text
        const filteredPages = cat.pages.filter(p => 
          p.title.toLowerCase().includes(filter.toLowerCase()) || 
          p.subtitle.toLowerCase().includes(filter.toLowerCase()) ||
          p.content.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredPages.length > 0) {
          const categoryHeader = document.createElement('div');
          categoryHeader.className = "text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 mt-4 px-2 font-mono";
          categoryHeader.innerText = cat.category;
          navContainer.appendChild(categoryHeader);

          filteredPages.forEach(page => {
            const btn = document.createElement('button');
            const isActive = page.id === currentPageId;
            btn.className = `w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all text-left group ${
              isActive 
                ? 'bg-police-blue/30 text-white border border-police-accent/40 font-semibold shadow-md' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-dark-700/60'
            }`;
            btn.onclick = () => {
              loadPage(page.id);
              if (window.innerWidth < 768) toggleSidebar();
            };

            btn.innerHTML = `
              <span class="${isActive ? 'text-police-gold' : 'text-slate-500 group-hover:text-slate-300'} font-mono">${page.icon}</span>
              <span class="truncate">${page.title}</span>
            `;
            navContainer.appendChild(btn);
          });
        }
      });

      if (navContainer.children.length === 0) {
        navContainer.innerHTML = `<div class="text-center py-8 text-xs text-slate-500 font-mono">Hasil pencarian tidak ditemukan...</div>`;
      }
    }

    // LOAD SELECTED PAGE CONTENT
    function loadPage(pageId) {
      currentPageId = pageId;
      
      let foundPage = null;
      let foundCategory = "";

      HANDBOOK_DATA.forEach(cat => {
        const p = cat.pages.find(x => x.id === pageId);
        if (p) {
          foundPage = p;
          foundCategory = cat.category;
        }
      });

      if (!foundPage) return;

      // Hitung urutan modul dinamis berdasarkan urutan elemen di ALL_PAGES
      const moduleIndex = ALL_PAGES.findIndex(p => p.id === pageId);
      if (moduleIndex !== -1) {
        document.getElementById('moduleCount').innerText = moduleIndex + 1;
      }

      // Update UI Header & Breadcrumb
      document.getElementById('breadcrumbCategory').innerText = foundCategory;
      document.getElementById('breadcrumbPage').innerText = foundPage.title;
      document.getElementById('pageTitle').innerText = foundPage.title;
      document.getElementById('pageSubtitle').innerText = foundPage.subtitle;

      // Update Active Navigation Item
      renderNavigation(document.getElementById('searchInput').value);

      // Render Content Body
      document.getElementById('pageContent').innerHTML = foundPage.content;
    }

    // SEARCH FILTER HANDLE
    function handleSearch(query) {
      renderNavigation(query);
    }

    // SIDEBAR TOGGLE MOBILE
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('mobileOverlay');
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    }


// THEME TOGGLE (saved locally in this browser)
function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-mode', isLight);
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  const meta = document.getElementById('themeColorMeta');
  if (icon) icon.textContent = isLight ? '🌙' : '☀️';
  if (label) label.textContent = isLight ? 'Mode Gelap' : 'Mode Cerah';
  if (meta) meta.setAttribute('content', isLight ? '#f4f6fa' : '#0f1115');
  const button = document.getElementById('themeToggle');
  if (button) button.setAttribute('aria-label', isLight ? 'Aktifkan mode gelap' : 'Aktifkan mode cerah');
}
function toggleTheme() {
  const nextTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
  try { localStorage.setItem('lspd-handbook-theme', nextTheme); } catch (e) {}
  applyTheme(nextTheme);
}
(function initTheme() {
  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('lspd-handbook-theme') || 'dark'; } catch (e) {}
  applyTheme(savedTheme);
})();



// Welcome screen transition into the handbook
function openHandbook() {
  const welcome = document.getElementById('welcomeScreen');
  if (!welcome || welcome.classList.contains('is-leaving')) return;
  welcome.classList.add('is-leaving');
  document.body.classList.add('handbook-entered');
  window.setTimeout(() => {
    welcome.setAttribute('aria-hidden', 'true');
    welcome.style.display = 'none';
  }, 780);
}
