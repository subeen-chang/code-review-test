'use client';

import { members } from '@/data/members';
import { motion } from 'framer-motion';
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible';
import MagneticButton from '@/components/animations/MagneticButton';
import TextReveal from '@/components/animations/TextReveal';

export default function MembersPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <TextReveal
            text="Meet ENHYPEN"
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-600"
          >
            Seven talented individuals, one incredible team
          </motion.p>
        </div>

        {/* Members Grid */}
        <div className="space-y-20">
          {members.map((member, index) => (
            <FadeInWhenVisible
              key={member.id}
              delay={index * 0.2}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div
                id={member.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center scroll-mt-24`}
              >
                {/* Member Image */}
                <motion.div
                  className="w-full lg:w-1/2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div
                    className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
                    style={{ backgroundColor: member.color + '20' }}
                  >
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <span className="text-9xl">{member.emoji}</span>
                    </motion.div>
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${member.color}20 0%, transparent 100%)`
                      }}
                      animate={{
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>

                {/* Member Info */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <h2 className="text-4xl font-bold mb-2" style={{ color: member.color }}>
                      {member.name}
                    </h2>
                    <p className="text-2xl text-gray-600 mb-4">{member.koreanName}</p>
                    <motion.p
                      className="text-lg text-purple-600 font-medium"
                      whileHover={{ scale: 1.05, x: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {member.role}
                    </motion.p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-gray-700 leading-relaxed text-lg"
                  >
                    {member.bio}
                  </motion.p>

                  <motion.div
                    className="grid grid-cols-2 gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {[
                      { label: 'Birthday', value: member.birthDate },
                      { label: 'Nationality', value: member.nationality },
                      { label: 'Height', value: member.height },
                      { label: 'Blood Type', value: member.bloodType }
                    ].map((info, i) => (
                      <motion.div
                        key={i}
                        className="bg-gray-50 p-4 rounded-xl"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: member.color + '10'
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                        <p className="font-semibold">{info.value}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3 pt-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full"
                      style={{ backgroundColor: member.color }}
                      animate={{
                        boxShadow: [
                          `0 0 0 0 ${member.color}40`,
                          `0 0 0 20px ${member.color}00`,
                          `0 0 0 0 ${member.color}40`
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div>
                      <p className="text-sm text-gray-500">Member Color</p>
                      <p className="font-semibold">{member.color}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Quick Navigation */}
        <FadeInWhenVisible delay={0.4}>
          <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Animated background */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <h3 className="text-2xl font-bold mb-6 text-center relative z-10">
              Quick Member Navigation
            </h3>

            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {members.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MagneticButton>
                    <a
                      href={`#${member.id}`}
                      className="block px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full transition-all backdrop-blur-sm"
                    >
                      <span className="mr-2">{member.emoji}</span>
                      {member.name}
                    </a>
                  </MagneticButton>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}
