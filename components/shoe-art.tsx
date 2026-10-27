/**
 * Aura shoe rendered entirely in SVG — no image assets required.
 * Side-profile sneaker with distinct heel, collar, tongue, lacing, toe box
 * and a two-layer sole.
 */
export function ShoeArt({
  gradient,
  accent = '#C6A664',
  className = '',
  sole = '#F5F2EC',
  dark = false,
}: {
  gradient: string;
  accent?: string;
  className?: string;
  sole?: string;
  dark?: boolean;
}) {
  const uid = Math.random().toString(36).slice(2, 8);
  const upper = dark ? '#2B2B33' : '#FBF9F6';
  const upperShade = dark ? '#1A1A20' : '#E7E2D8';
  const line = dark ? '#4A4A55' : '#C9C2B4';
  const ink = dark ? '#8E8E9C' : '#0B0B0F';

  return (
    <svg
      viewBox="0 0 440 210"
      className={className}
      role="img"
      aria-label="Aura running shoe, side profile"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={'sole' + uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={sole} />
          <stop offset="100%" stopColor={dark ? '#26262E' : '#D9D3C6'} />
        </linearGradient>
        <linearGradient id={'mid' + uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id={'up' + uid} x1="0.2" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor={upper} />
          <stop offset="100%" stopColor={upperShade} />
        </linearGradient>
        <filter id={'sh' + uid} x="-15%" y="-15%" width="130%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#0B0B0F" floodOpacity="0.22" />
        </filter>
      </defs>

      <g filter={'url(#sh' + uid + ')'}>
        {/* ── outsole (bottom rubber) ── */}
        <path
          d="M46 172
             C46 163 54 157 66 156
             L352 150
             C378 149 392 156 393 166
             C394 176 384 182 364 182
             L74 184
             C54 184 46 180 46 172 Z"
          fill={'url(#sole' + uid + ')'}
        />
        {/* outsole tread notches */}
        <g stroke={dark ? '#3C3C46' : '#C6C0B2'} strokeWidth="2.2" strokeLinecap="round">
          <path d="M86 178v-8" />
          <path d="M126 177v-9" />
          <path d="M166 176v-9" />
          <path d="M206 175v-9" />
          <path d="M246 174v-9" />
          <path d="M286 173v-9" />
          <path d="M326 171v-9" />
        </g>

        {/* ── midsole (foam wedge, thicker at heel) ── */}
        <path
          d="M52 158
             C50 140 62 126 88 120
             L112 115
             C132 111 150 110 168 112
             L210 116
             C232 118 250 116 268 110
             L318 94
             C334 88 348 90 358 100
             C372 114 380 132 388 148
             C392 155 388 158 380 159
             L70 162
             C58 162 53 161 52 158 Z"
          fill={'url(#mid' + uid + ')'}
        />
        {/* midsole highlight */}
        <path
          d="M56 150 C58 136 72 126 96 121 L166 112"
          stroke="#FFFFFF"
          strokeOpacity={dark ? 0.14 : 0.5}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* ── upper: heel counter up over the collar to the toe ── */}
        <path
          d="M92 118
             C84 104 84 90 92 78
             C100 65 114 58 130 58
             C146 58 158 65 164 78
             L172 96
             C186 92 202 92 218 97
             L268 113
             C284 118 296 118 310 114
             C330 108 348 106 360 112
             C372 118 378 132 380 146
             L70 150
             C64 138 72 126 92 118 Z"
          fill={'url(#up' + uid + ')'}
        />

        {/* collar opening (dark interior) */}
        <path
          d="M130 59
             C146 59 158 66 164 79
             L171 95
             C160 99 148 99 138 96
             C126 92 120 82 121 71
             C122 63 125 59 130 59 Z"
          fill={dark ? '#0F0F13' : '#2A2A32'}
        />
        {/* collar padding rim */}
        <path
          d="M122 72
             C123 62 128 57 136 57
             C150 57 162 65 168 79"
          stroke={line}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* tongue */}
        <path
          d="M170 80
             C182 74 196 72 208 76
             C216 79 221 87 220 95
             C214 92 200 90 186 92
             C177 93 171 91 170 80 Z"
          fill={dark ? '#37373F' : '#F2EEE6'}
          stroke={line}
          strokeWidth="1.6"
        />

        {/* lacing panel */}
        <path
          d="M176 96 C196 90 214 88 232 92 L272 108 C282 112 292 113 302 111
             L300 120 C288 123 276 121 264 117 L226 103 C208 99 192 101 178 105 Z"
          fill={dark ? '#14141A' : '#2E2A24'}
          opacity={dark ? 0.9 : 0.85}
        />
        {/* eyelets */}
        <g fill={dark ? '#C9C9D4' : '#F2EEE6'} opacity="0.85">
          <circle cx="193" cy="95" r="2.1" />
          <circle cx="206" cy="98" r="2.1" />
          <circle cx="220" cy="103" r="2.1" />
          <circle cx="234" cy="108" r="2.1" />
        </g>
        {/* laces — dark strokes read against the pale upper */}
        <g
          stroke={dark ? '#D8D8E2' : '#FBF9F6'}
          strokeWidth="4.2"
          strokeLinecap="round"
        >
          <path d="M186 99 L208 88" />
          <path d="M198 105 L222 93" />
          <path d="M211 111 L236 99" />
          <path d="M224 117 L249 105" />
        </g>

        {/* side accent swoosh */}
        <path
          d="M104 128
             C136 126 168 118 198 106
             C214 100 228 96 240 96
             C232 108 216 118 196 125
             C164 137 128 141 104 138
             C98 137 98 128 104 128 Z"
          fill={accent}
          opacity={dark ? 0.85 : 0.95}
        />

        {/* toe box panel */}
        <path
          d="M300 118
             C320 111 340 108 358 113
             C370 117 377 129 380 145
             L302 148
             C300 140 300 128 300 118 Z"
          fill={dark ? '#20202A' : '#FFFFFF'}
          opacity={dark ? 1 : 0.55}
        />
        {/* toe perforations */}
        <g fill={ink} opacity={dark ? 0.35 : 0.18}>
          <circle cx="322" cy="130" r="1.8" />
          <circle cx="334" cy="128" r="1.8" />
          <circle cx="346" cy="127" r="1.8" />
          <circle cx="328" cy="138" r="1.8" />
          <circle cx="340" cy="136" r="1.8" />
        </g>

        {/* heel tab */}
        <path
          d="M92 78 C98 66 110 59 124 58 L124 64 C112 65 102 71 97 81 Z"
          fill={accent}
          opacity="0.8"
        />

        {/* sole/upper seam */}
        <path
          d="M70 150 L380 146"
          stroke={ink}
          strokeOpacity={dark ? 0.3 : 0.1}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
