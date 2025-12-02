import { members } from '@/data/members';

export default function MembersPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Meet ENHYPEN
          </h1>
          <p className="text-xl text-gray-600">
            Seven talented individuals, one incredible team
          </p>
        </div>

        {/* Members Grid */}
        <div className="space-y-20">
          {members.map((member, index) => (
            <div
              key={member.id}
              id={member.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center scroll-mt-24`}
            >
              {/* Member Image */}
              <div className="w-full lg:w-1/2">
                <div
                  className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
                  style={{ backgroundColor: member.color + '20' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl">{member.emoji}</span>
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}20 0%, transparent 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2" style={{ color: member.color }}>
                    {member.name}
                  </h2>
                  <p className="text-2xl text-gray-600 mb-4">{member.koreanName}</p>
                  <p className="text-lg text-purple-600 font-medium">{member.role}</p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">{member.bio}</p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">Birthday</p>
                    <p className="font-semibold">{member.birthDate}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">Nationality</p>
                    <p className="font-semibold">{member.nationality}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">Height</p>
                    <p className="font-semibold">{member.height}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">Blood Type</p>
                    <p className="font-semibold">{member.bloodType}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <div
                    className="w-12 h-12 rounded-full"
                    style={{ backgroundColor: member.color }}
                  />
                  <div>
                    <p className="text-sm text-gray-500">Member Color</p>
                    <p className="font-semibold">{member.color}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Navigation */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Quick Member Navigation</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {members.map((member) => (
              <a
                key={member.id}
                href={`#${member.id}`}
                className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="mr-2">{member.emoji}</span>
                {member.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
