FROM node:19

ENV USER cat
ENV PORT 3000

RUN adduser --disabled-password $USER

USER $USER
EXPOSE $PORT

WORKDIR /home/$USER
COPY --chown=$USER:$USER ./ /home/$USER/deploy/

RUN chmod +rwx /home/$USER/deploy/entrypoint.sh

ENTRYPOINT ["./deploy/entrypoint.sh"]
CMD ["node", "./deploy/app.js"]
