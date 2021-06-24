import { FunctionalComponent, h, Fragment } from 'preact'
import Helmet from 'react-helmet'

const wr = 'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYGAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArKysnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJycnJysgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArJycnJycrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArKysrJysrJysgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7KycrKysrKysjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKycnKysrKysrIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKycnJysrKysrIyMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCsrJycrJysnKyMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICArIzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMrKycrKycrKysjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgKysrKyNgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrKysrKysrJysjQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICsnJysrKytgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArKysnKycnKysjI2AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICArJysrKysrKyNgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArKysrKysnKycrI0AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgKycrKysrKysrKysuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKysrKysrIysrKyNgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICMrKysrKycnJyc7JyMuICAgICAgICAgICAgICAgICAgICAgICAgICAgIysrKysnJycrKysjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICA7KysrKysnJyc7JycrKyNgICAgICAgICAgICAgICAgICAgICAgICAgICsrJycnJycnKysjLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgYCsrIysrJysnKysnJycnKysgICAgICAgICAgICAgICAgICAgICAgICwnJycnJzs7JyMjIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICArJysrKycrKysrJycnKysrK2AgICAgICAgICAgICAgICAgICAgICAjJycnOycnJysjIzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgOicnOysrKysrKycrKysnJysrOiAgICAgICAgICAgICAgICAgICAgKysrKycnJycrI0AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICArKycnJysrIysrKysnOycnJyc6ICAgICAgICAgICAgICAgICAgICsrJysrJycnKyMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgKysrOyc7KyMnKycnJzs7OzsnKy4gICAgICAgICAgICAgICAgICsrJycnKysrKyNAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICArKys7OzsnKycnJycnJyc7OycnLCAgICAgICAgICAgICAgICAjJycnJycnJysjLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgLCs7Ozs7OysrKysrKycnOzsnJyssICAgICAgICAgICAgICAjKycnJycnJysjQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAjJycnJzs7OysrIysrJycnJycnJy4gICAgICAgICAgICA6KycnJycnJysrIzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICMnJyc7Ozs7OyMrJycnJycnJycrOiAgICAgIGBgYCBgIycnJycnJycrI0AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgKycrJzs7Ozs7KysnJycnJycnJysjK0BAIyMjI0BAIysnKycnJycnKyMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgIC4nJysnOzs7Ozs7KycnJzs7JycnKyNAIyMjIyMjIyMrJycnJycnJyMjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgLCcnKyc7Ozs7OycrJzsnOzsnJycrQCMjIyMjIyNAIzsnJycnJycjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuKycnJzs7Ozs7JysnOyc7OycnI0AjIyMjIyMjQEAnJzsnJydAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgIGArKycnJzs7OzsnKzs7OycnKyMjIyMjIyMjIyNAKycnJycnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrJysrOzs7OyMrJycnIyMjIyMjIyMjIyMjIyM7JycnIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrKycnJzsrKycnKyMjIyMjIyMjIyMjIyMjKycnKy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCsrKysrIysnK0BAQEBAQEBAQEBAIyNAQEAjI0BAYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCsjIysjQEBAQEBAQEBAQEBAI0BAQEAjIyNAQEBAOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6QEBAQEBAQEBAQEBAQEAjIyNAI0AjIyNAQEBAIyNALiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBAQEBAQCNAI0BAQEBAQCMjIyMjIyMjIyNAQEBAQCMjIyM7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtAQCMjIysrIyMjIyMjQEBAQEAjIyMjQEBAIyMjIyMjIyMjQCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxAI0AjIyMrIyMjIyMjIyMjIyMjIyMjIyMjKysjIysjIyMjIyNAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAQCNAQCMrIzs7KyMjIyMjIyMjKysjKysrKys7JysrIyMjIyNALCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQEBAIyMjOjsjIyMjQEBAQEBAIysrJycnJycrKyc7JyMjIyMjOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjQEBAIyMjIywnI0BAQEBAQEAjI0AjIycrKyc7JysjI0AjIyNAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyMrI0AnOyMjQEBAQEBAQEAjKyM7IzsuLiwrIyMjQEBAI0AuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMjQCNAIysjQEBAQEBAQEAjKycjJysuLjorIyMjQEBAI0AjYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAjIyMjQCMjQEBAQEBAQEBAIycnIzojJycrIyMjQEBAQEAjQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIyMnI0BAQEBAQEBAQEBAIysnJyc7IyMjIyMjQEBAQEBAIysgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyMjJyNAQEBAQEBAQEBAIyMrJycrKyMjI0BAQEBAQEBAQCMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOisjIycrI0BAQEBAQEBAIyMrJysrKysjIyMjI0BAQEBAQCMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMjIyMnJyNAQEBAQCMjIyMrKysrJysrIyMjQEBAQEBAQCNAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIyMjKyc7OysrKysrKycrKycnJycnJysrIyNAQCMjQCNAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuIyMjKysrJys7JysrKysnJycnJycnJycrKysjIysrKyNAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiMjIysrKysrJysrKyMrKycnJycnJycnKysnIyMjKysjI0AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDojIyMjIysrKycrKysnKycnJycnOzs7JycnKysjIysrIyMjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIysjIysrKycnKysnJzs6OycnJycnKycnJycnJysjKyMjIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCMjIyMjKysnKysrJyc7Ojo7JycrJysrJzs7JysrIysjIyMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIyMjIyMrJysrKycnOzs7OycjIyMjJzs7OysrIyMjIyMjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyMjIyMrKycjKysnJyc7Jzs7JycjJzs7JycrKysjIyMjIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsjIyMjIysnIyMrKycnJycnJycnIycnJycnJysjIyMjIyMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7IyMjIyMrJysjIysnJycnJysrQEBAIyMrJycnKyMjIyMjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMjIyMjIysrIyMjKycnJytAQCMjQEAjJysrKyNAI0AjI2AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIyMjIyMjKysjIysjKysnOzs7OzsnJycrIysjIyNAI0AuLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyMrIysrIyMjIyMrKysnJycnJycnJysrIyMjIyMjIyMnLiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIyMjICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMjIyMjKysrKyMjIyMjIyMjKysrKysjIyMjIyMjIyMjLi4uOiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAjIyMjIysgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCwsIysjIyMrKycrKysrIyMjIyMjIyMjIyMjIyMjIyMrOy4uLiwgICAgICAgICAgICAgICAgICAgICAgICAgICAjKysjIyMrOi4gICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKzosLicjKyMjKysrKysnJycnKysrIyMjIyMjIyMjKysrIy4uLi4uOyAgICAgICAgICAgICAgICAgICAgICAgICAjKysjQEArI0BAIyAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKywuLi4uIyMrJyMjKyMrJysrJycnJycrIyMjIyMjIycrIzsuLi4uLi4gICAgICAgICAgICAgICAgICAgICAgICBgKysrKyMjKytAQEBgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuOiwsLi4uLjojIyMrKysnKysrKysnJysnKysrKysnJycnKyMuLi4uLi4uOiAgICAgICAgICAgICAgICAgICAgICAgQCMrIytAKycrI0AjLiAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7LCwsLi4uLi4uKyMjIysrKysrKysrKysrKysrJysrIysrKyMuLi4uLi4uLi5gICAgICAgICAgICAgICAgICAgICAgLisrIyMrQCMjKyMjKzpgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIGA6LCwsLi4uLi4uLiwjIyMrKysrIysrIysrKysrKysrKysrKysrLi4uLi4uLi4uLmAgICAgICAgICAgICAgICAgICcnLCMnKyNAIyMjIysrIyMjIys7ICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgIDssLCwsLi4uLi4uLi4uQCMrKyMrKysjKysrKyMjKysrIysrKydALi4uLi4uLi4uLi4uLCAgICAgICAgICAgICAgIC4rKyNAKysjIyMjI0AjKysjQEAjIysgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgLiwsLCwsLi4uLi4uLi4uLicjKyMjIysjIysrKysrKysrKyMrKysjLi4uLi4uLi4uLi4uLi4sICAgICAgICAgICAgICAuKysjIyNAIysjKyMrKysjKysjIyMrICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgOywsLC4uLi4uLi4uLi4uLi4sIyMrKysrKysrKysrIyMrKyMjKysjIy4uLi4uLi4uLi4uLi4uLi4sICAgICAgICAgICAgICMjKysrKysjKyNAIyMjIyMjKysjIyAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAuLCwsLiwuLi4uLi4uLi4uLi4uLiMjKyMjIysrKysjKyMrIyMrKysrIywuLi4uLi4uLi4uLi4uLi4uLC4sICAgICAgICAgICA7IyMjI0BAQCMrKysjI0AjIyMjIycgICAgICAgICAKICAgICAgICAgICAgICAgICAgICA7Li4uLi4uLiwuLi4uLi4uLi4uLi4sIyMjKyMjKyMjKysrIysrKysrKycuLi4uLi4uLi4uLi4uLi4uLi4uLCwgICAgICAgICAgIyMrKyMjQCNAIyMjKysrIyMjQCMgICAgICAgICAgCiAgICAgICAgICAgICAgICAgIC4sLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiMjIysjKysjIysrKyMjIysrKyMsLi4uLi4uLi4uLi4uLi4uLi4uLi4sLi5gICAgICAgOywnKysrI0BAQEBAQCMjKysrIyMgICAgICAgICAgIAogICAgICAgICAgICAgICAgIDouLi4uLi4uLi4uLi4uLi4uLiwuLi4uLi4sIyMjIysrKyMjKysjIysrKyM6Li4uLi4uLi4uLi4uLi4uLi4uLi4uLC4uLi4sICAgLCwsJysrKysjIyMjQEBAIysrKyMgICAgICAgICAgICAKICAgICAgICAgICAgICAgICwuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiMjIyMjKysrKysrKysrKysrLC4uLi4uLi4uLi4uLi5gLi5gLi4uLi4uLi4uLi4nJywsLCwrKysrKysrKyMrKysrKyMgICAgICAgICAgICAgCiAgICAgICAgICAgICAgYC4uLiwuLi4uLmAuLi4uLi4uLi4sLi4uLi4uLi47IysjKysrKysrKysrKysjOi4uLi4uLi4uLi4uLi4uYGBgYC4uLi4uLi4uLi4jLjssLiwuIyMrKysrKysrKysjKzsgICAgICAgICAgICAgIAogICAgICAgICAgICAgLC4uLi4uLi4uLi4uLi4uYC4uLi4uLi4uLi4uLi4uLCMjIyMrKyMrKysrKysrKy4uLi4uLi4uLi4uLi4uLmBgYGAuLi4uLi4uLi4nLi4uLC4uLiMjKysrKysrKysrKys7LiAgICAgICAgICAgICAKICAgICAgICAgICAgOiwuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4nIyMjIysjIyMrKysjIywuLi4uLi4uLi4uLi4uLi5gYGAuYC5gLmAuLi4nLi47LiwuLiw7IysjKysnJysrKys6OjogICAgICAgICAgICAgCiAgICAgICAgICAgLi4sLC4uLi4uLi4uLi4uLi4uLi4uOi4uLi4uLi4uLi4uLCMjIysrIyMrKysrIysuLi4uLi5gLi4uLmAuLi4uLmBgLmAuYC5gYC4uLC4uJy4sLi4sLiMjIysrKysrKysrLDo6ICAgICAgICAgICAgIAogICAgICAgICAgIC4uLiwuLi4uLi4uLi4uLi4uLi4uLC4uLi4uLmAuLi4uLi4rIyMrIyMjKysrKysuLi4uLi4uLi5gLi5gLi4uLmBgYGAuYC4uYC5gLi4uLjouLi4uLiw6I0BAQEBAIyMrOi47OiAgICAgICAgICAgICAKICAgICAgICAgICAuLi4sLC4uLi4uLi4uLi4uLi4uLCwuLi4uLi4uLi4uLi4uLCMjKyMjIysrKysrLi4uLi4uLi4uLmAuLi5gLi4uLi4uLmBgLi4uLjouLmAuYC4uLiwuLi4sOytAQCMjOywuOidgICAgICAgICAgICAgCiAgICAgICAgICAnOi4uLiwuLi4sLiwuYC4uLi4uLicuLi4uLi4uLi4uLi4uLi4jIyMjIyMrIyMjLi5gLi4uLi4uLmAuLi4uLmBgYGAuYGBgLi4uYC4uYCwuLi4uLi4uLi4uYC4uLi4sKy4uLDo7LiAgICAgICAgICAgIAogICAgICAgICAgOiwsLi4sLC4uLi4uLC4uLi4uLi46LiwuLi4uLi4uLi4uLi4uLCMjIyMjIyMjKy4uLi4uLi4uLi4uLi4uLmBgYGBgYGAuYGBgYC5gLmAsLi4uLiwuLi4sLi4uLi4uLi4uLiw6LCwgICAgICAgICAgICAKICAgICAgICAgIDouLi4uLiwsLi4uLi4uYGAuLi4uOi4uLC4uLi4uLmBgLi4uLi4jIyMjKyMjIy4uLi5gLi4uLi4uLi4uLi5gYC5gLmBgLmBgYGAuLixgLCwuLi4uLi4uLiwsLmAuLmBgYGBgYC4sICAgICAgICAgICAgCiAgICAgICAgICAsLi4uLi4uLiwuLi4uLi4uLi4uLjouLi4sLi4uYC4uLmBgLi4uOyMjIyMjIyNgLmBgYGBgLi4uLi4uLi4uYC5gLi5gYC5gYGBgLmAuLi4uLi4uLi4sLi4uLC4uLi4uLi4uLjpgICAgICAgICAgICAgIAogICAgICAgICAgLC4uLi4uLi4uYC4uLi4uLi4uLi46YC4uLi4sLi4uLi4uLi4uLixAIysjIyMuYC4uYC4uLi4uLi4uLi4uYGBgYC5gYGBgYGBgLmBgYC5gLC4uLi4uLi4uLiwsLi4uLCwsOmAgICAgICAgICAgICAgICAKICAgICAgICAgICwuLi4uLi4uLi4uLi4uLC4uLi4uOi4uLi4uLi4uLi4uLi4uLi4uKyMjIyMjYC5gLi5gLi4uLi4uLi4uLmBgLmAuYGBgYC5gYC5gLmAsLi4uLi4uLi4uLi4sLCwsLCwsICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAsLi4uLi4uLi4uLi4uLiwuLi4uLjpgLi4uLi5gLi4uLi4uLi4uLjojIyMjLC4uLi5gLmBgYC4uLi4uYGBgYGAuYGBgYGBgLmAuYC5gLC5gLC4uLC4uLiwuLDosOjogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgLC4uLi4uLi5gLi4uLi4uLDsuLmA6YC4uLi4uYC4uLi4uLi4uLi4uIyMjI2BgYGBgLi5gYC4uLmAuYC5gYGBgLmBgYGAuYGAuLi4uLiwuLiwuLi4sLiwsLCw6LCAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgIC4uLi4uLi5gYGAuLi4uLixgLC4uLGAuLi4uLi4uYC4uLi4uLi4uLisjIzsuLmAuYC4uYGAuLi5gYGAuLmBgYC5gYGBgYGBgYC4uLmAuLmAuLi4sLCw6OjosICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAuLi4uYC4uLi5gYC5gLi4uIGAuLiwuLi4uLi4uYGBgLi4uLi4uLi46KyMuYGBgYC5gLi4uLi4uLmBgLmBgYGBgYGBgLmBgYGAuLi4sLi4uLiwuLCw6YCAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICBgLi4uLi4uYC5gYGBgLi4uLiAgLi4sLi4uLiwuLi5gLmAuLi4uLi4uLisrYGAuLi4uLi4uLmAuLmBgYC5gYGAuYGBgYC5gYC4uLi4uLiw6Li4sOywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgYC4uLi4uLi4uLi4uLmAuLi4gIC4uLmAuLi4sLi5gYC4uYC4uLi4uLi4nLGAuLmAuYGAuLmBgLmBgYGAuYGBgYGBgYGBgYGAuLCwsLi4sLDpgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgIGAuLi4uLi4uYGBgLi4uLi4uICAuLi4uLi4uLi4uLmBgYGBgLi4uLi4uLC5gYC4uLmAuLi5gYC5gYC5gYGBgLmBgYC5gYGBgLiAgIGAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICBgLi4uLi4sLi4uLi5gYC4uLCAgLi4uLi4uLi4uLi5gYGAuYGAuLi4uLi4uYGAuLmAuLmBgYGAuYGBgYGBgYGBgYGBgYC5gLiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA='

const cms = {
  time: <Fragment>{+new Date()}</Fragment>,
  talk: <Fragment><h1>Urging to speak?</h1><p>Leave a message in the <a href="/chat">chatter</a> or drop one in the <a href="https://mindmeet.space/">mind meet space</a>.</p></Fragment>,
  listen: <Fragment><h1>Hear</h1><p>Looking for something to listen to?</p><p>Listen to <a href="/page/music">music</a>, <a href="/page/words">words</a>, or <a href="/page/sounds">other sounds</a>.</p></Fragment>,
  watch: <Fragment><h1>Visual Stimulation</h1><p>Things you can watch.</p><p>Watch some videos to make you <a href="/page/funny">laugh</a>, <a href="/page/happy">smile</a>, <a href="/page/trippy">trip</a>, or <a href="/page/deep">think</a>.</p></Fragment>,
  play: <Fragment><h1>Play</h1><p>Have phun!</p><p>When in doubt, <a href="/page/games">play the game</a>.</p></Fragment>,
  music: <Fragment><h1>The Music of Sound</h1><p>Listen to music.</p><p>Choose a musical path and enjoy the ride...</p><p><a href="//ice3.somafm.com/brfm-128-mp3">brfm</a></p></Fragment>,
  words: <Fragment><h1>Words</h1><p>A word in the brain is worth two in the mouth.</p><p>Listen to the words of those who have tread the path.</p><p>Don't look too close but go as deep as you can.<br />Beethoven<br />Listen the sound of silence.</p></Fragment>,
  sounds: <Fragment><h1>Sounds</h1><p>The sounds of the world.</p><p>Let sounds paint the picture in your mind.</p></Fragment>,
  deep: <Fragment><h1>Deep</h1><p>Videos to take you to the next level.</p><p>Deep videos abroad. Turn on, tune in, drop out.</p></Fragment>,
  trippy: <Fragment><h1>Trippy</h1><p>Videos to help explore the psychedelic state.</p><div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0RXdd0pCJ9Q" /></div><p>Who's seeing this right now?</p></Fragment>,
  games: <Fragment><h1>Games</h1><p>Fun games ahead! Wanna play?</p></Fragment>,
  funny: <Fragment><h1>Funny</h1><p>Ready to laugh?</p><p>Warning: Hilarity may ensue.</p><div class="embed-responsive embed-responsive-16by9"><iframe height="315" src="https://www.youtube-nocookie.com/embed/yL_-1d9OSdk?rel=0" width="560" /></div></Fragment>,
  happy: <Fragment><h1>Happy</h1><p>Want to feel better?</p><div class="embed-responsive embed-responsive-16by9"><iframe height="315" src="https://www.youtube-nocookie.com/embed/XBTOqyUtX-0?rel=0" width="560" /></div><p>Videos to make you feel good.</p></Fragment>,
  read: <Fragment><h1>Read</h1><p>Words for thought.</p><p><a target="_blank" href="/files/the-doors-of-perception.pdf">The Doors of Perception</a></p><p><a target="_blank" href="/files/the-bardo-thodol-tibetan-book-of-the-dead.pdf">The Bardo Thodol: The Tibetan Book of the Dead</a></p></Fragment>,
  gaze: <Fragment><h1>Gaze</h1><p>Follow the white rabbit and face the Abyss.</p><p>Sorry, I don't know anything about a key or a door.</p></Fragment>,
  'white-rabbit': <Fragment><h1>White Rabbit</h1><p>Do you already know the risks of staring into abyss?</p><pre>{atob(wr)}</pre></Fragment>,
  life: <Fragment><h1>What is life?</h1><p>The life equation is the antidote to the anti-life equation.</p><p>The equation is mathematical proof that life is worth living, just as the anti-life.</p><p>The equation is mathematical proof that life is meaningless.</p><p>Theorize. Life is precious.</p></Fragment>,
  see: <Fragment><h1>See</h1><p>Seeing is believing, or so they say...</p></Fragment>,
  hear: <Fragment><h1>Hear</h1><p>Hear ye, Hear ye!</p></Fragment>,
  taste: <Fragment><h1>Taste</h1><p>If it leaves a bad taste in your mouth, imagine what it does to the universe.</p></Fragment>,
  smell: <Fragment><h1>Smell</h1><p>Oouoooh, that smell!</p></Fragment>,
  feel: <Fragment><h1>Feel</h1><p>You may feel this, but can you feel that?</p></Fragment>,
}

interface Props {
    page: keyof typeof cms;
}

const Page: FunctionalComponent<Props> = (props: Props) => {
  const { page } = props
  return (
    <section class="container py-5">
      <Helmet>
        <title>Do { page.replace('-',' ') }</title>
      </Helmet>
      { cms[page] }
    </section>
  )
}

export default Page
