FROM quay.io/CyberKillersTEAM/queensenumd
RUN git clone https://github.com/CyberKillersTEAM/QUEEN-SENU-MD /root/CyberKillersTEAM
WORKDIR /root/CyberKillersTEAM/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
