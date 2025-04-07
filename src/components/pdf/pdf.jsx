import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section : Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga molestias itaque quidem, recusandae incidunt laboriosam suscipit voluptate. Numquam, voluptas. Assumenda incidunt deserunt temporibus accusamus, nihil vel quo. Quibusdam nihil necessitatibus eaque architecto corrupti, esse expedita delectus quo omnis tenetur quasi tempora error dolor minus aperiam blanditiis? Repudiandae alias hic fugit deleniti, minima labore quos eligendi quod architecto quibusdam nostrum consequatur officia quam nihil, similique ab soluta modi. Impedit similique laudantium, quis, corporis numquam eum blanditiis itaque modi fugit eos distinctio asperiores. Voluptate inventore nisi aperiam, id voluptas rerum modi numquam, quia eveniet odio reprehenderit, nemo incidunt? At, repellat sed! Enim cumque odio illum consectetur error accusantium tempora, soluta commodi labore ipsa. Maxime, expedita. Praesentium est ullam sed odit quo veniam assumenda odio aliquam nihil, ab asperiores nulla magnam deleniti aut corrupti ipsum doloribus culpa omnis dolores maiores autem molestias? Eligendi, voluptate at repellat ullam voluptatibus ipsum quo amet minima dolore aut ratione id molestiae iusto? Accusantium, vel sint fugiat, omnis culpa dolorem consequuntur exercitationem placeat nemo corporis voluptates officiis totam beatae accusamus earum doloremque facere? Libero pariatur similique repudiandae sed illo iure autem cupiditate, doloremque animi aperiam quo sunt itaque nostrum placeat distinctio nisi porro? Rem, dolorum expedita tempore cupiditate alias obcaecati enim officiis molestias quod similique omnis laudantium placeat repellat in deserunt necessitatibus nam autem pariatur vero doloremque dolore laborum ipsa quae! Optio quo suscipit omnis sit, inventore aperiam accusamus natus iste beatae error fuga quidem labore, necessitatibus odit! Est esse quod incidunt eligendi eius vitae delectus modi sed, quia, quo, impedit debitis odit minus sequi illum perspiciatis eaque illo repudiandae voluptatem veritatis explicabo autem animi blanditiis? Temporibus iure distinctio voluptates praesentium nesciunt dolor magni, culpa perspiciatis provident sunt animi cum voluptate laborum quos error repellendus dolorum alias ducimus delectus voluptatibus necessitatibus assumenda doloremque architecto explicabo! Aspernatur, consequuntur adipisci odio dignissimos cumque iusto voluptates vitae distinctio nam itaque illo nulla atque est fugiat deleniti sed nesciunt minus amet voluptatibus suscipit perferendis repellendus fuga. Eius, nesciunt aliquid eos voluptate iure modi omnis nisi illo soluta quasi quidem voluptas quaerat reiciendis, tenetur beatae ullam asperiores dolorum possimus repellendus autem, explicabo obcaecati ut voluptatum? A amet ipsa corrupti vero dolores, ad, molestias asperiores, dolorum atque voluptas maiores totam deleniti? Iusto perferendis velit eum impedit corporis quam expedita aut natus ab consequuntur tempore maiores, nemo quo excepturi eius consectetur animi pariatur nisi dignissimos dolorum et quasi perspiciatis? Pariatur repudiandae tempore quas praesentium libero magnam aliquid itaque id eveniet fuga eum porro, alias quisquam voluptatum. Ad esse facilis, officia mollitia nesciunt iure atque, tempore minima natus provident sint culpa omnis molestias dolorum ex vitae, rem temporibus neque necessitatibus? Laudantium et omnis eligendi repellendus impedit mollitia quo magnam, obcaecati numquam nam odio voluptatem maxime iste placeat aliquam perspiciatis nesciunt ex! Quaerat quisquam illum error ducimus minima. Et optio cumque quaerat blanditiis dolore odio a vero, magnam enim explicabo culpa quia dolorem inventore ducimus, porro iusto, distinctio recusandae quis animi? Suscipit, quos amet eum velit adipisci quidem ex libero autem fuga asperiores, expedita excepturi, tempore magnam possimus? Id asperiores quos excepturi nam iste, voluptate reprehenderit eum suscipit! Quod rem ad quia est, nihil sint ipsa repudiandae rerum, quam possimus voluptas esse tempore, alias nam non officiis necessitatibus hic laborum libero odio cumque harum a consequatur fugit. Voluptate enim quas sequi eveniet veritatis distinctio eos tenetur eligendi, reiciendis error, repudiandae perferendis similique rerum atque provident rem qui perspiciatis corrupti ex quis. Molestiae, aspernatur architecto unde et distinctio sequi commodi quisquam dolore sed molestias, pariatur cupiditate ad porro vel ab maiores asperiores in? Consectetur nobis sit quia ullam amet optio aliquam laboriosam debitis numquam eaque, in ex molestiae, cum neque natus doloremque repudiandae quod culpa! Dolores consectetur magni quidem, atque velit animi ipsum architecto illum quos maxime quam delectus deserunt aspernatur voluptates harum. Pariatur iure maxime magnam? Corporis ex alias blanditiis dolor, maxime fugit eaque minima maiores pariatur culpa itaque cupiditate nulla error excepturi delectus harum veritatis tenetur consequatur odit. Sequi voluptas possimus temporibus necessitatibus unde deserunt illo sed consequuntur quas, iusto assumenda quibusdam illum, obcaecati quam deleniti expedita quis enim accusamus eius dicta nihil esse! Fugit placeat nam inventore molestiae, rerum voluptate sit totam maxime? Dolores, vel veniam. Explicabo quam deleniti eaque quos culpa aperiam magnam, architecto nostrum, vero temporibus quis maxime odit consequatur illo! Veritatis expedita, quam perspiciatis incidunt tempore et laborum atque! Architecto voluptatibus voluptate autem cum eos quaerat aliquam, iure nesciunt nobis harum beatae, repudiandae eius numquam hic nam obcaecati eum provident corrupti assumenda dicta adipisci consequuntur. Delectus quibusdam, mollitia suscipit autem, molestias, numquam ratione aspernatur quia voluptate dolore natus vero non! Architecto est corporis soluta delectus laudantium itaque vitae officiis eveniet natus corrupti consequuntur blanditiis ipsam quo ipsum, unde nisi doloribus enim aperiam. Excepturi rem velit reiciendis dignissimos veritatis at tempore facilis cumque, molestiae unde ipsum esse tenetur quibusdam fugiat dolorem harum vero quisquam? Sint, voluptas voluptatem. Ipsa ab facilis id illo. Dolores vel ex omnis, esse consectetur nihil, molestiae totam fugiat rerum cum voluptatem facere, modi tempore? Natus, vitae id. Ducimus expedita aperiam, iusto sit, maiores quae eius suscipit, earum corrupti labore sunt ipsum similique cumque deleniti esse. Soluta doloribus doloremque exercitationem earum ratione facilis! Corrupti voluptatem earum repellat ea itaque cum dolorem obcaecati facere ducimus quisquam, fugit quasi rem sunt, enim laborum non quia deserunt voluptate delectus fugiat. Natus ut voluptatum quidem quis vitae iusto, sequi mollitia voluptatibus suscipit, repellat aut dignissimos ipsum, officiis rerum minima porro velit impedit sint cumque possimus. Nemo vero sed sequi optio vitae illum pariatur dignissimos ex culpa? Harum, neque sequi! Perferendis voluptates illo eaque laudantium iste a, modi suscipit deserunt aliquam pariatur dicta incidunt voluptas provident, autem reiciendis in soluta numquam amet odit quisquam. Qui, veritatis labore velit consectetur corporis alias earum recusandae laudantium enim illum eos voluptatibus deserunt error unde sunt harum perspiciatis totam necessitatibus nisi soluta commodi. Doloremque veritatis consectetur voluptate ipsum explicabo in est animi repellat dicta. Recusandae ut, eligendi dolore quaerat, saepe rem, repellat eaque facilis aliquam similique vero doloribus nulla! Recusandae voluptas quibusdam placeat delectus debitis dolores earum odio ipsa deleniti laudantium est culpa nam sequi, ratione possimus consequuntur doloribus velit veniam sit ducimus consequatur quod aliquam necessitatibus! Deserunt laboriosam animi officiis, qui et enim, dolorem soluta aperiam molestias illo esse id ipsam eveniet consequatur nisi perferendis earum libero ullam voluptatem natus. Ipsam quod reprehenderit odit reiciendis culpa non libero qui quas, sequi facilis eos ipsa dolor, sapiente quae molestias laboriosam eaque ea impedit, inventore iusto cumque illum! Veritatis tempore atque pariatur ab iure quaerat voluptatum ducimus repudiandae ipsa, molestias temporibus, libero laboriosam, incidunt porro architecto eveniet cumque et vero iusto ex illo blanditiis sint praesentium commodi? Repudiandae voluptas eaque odit, neque voluptatum quasi aliquid praesentium inventore illum. Recusandae hic optio neque odit sit excepturi cupiditate saepe ab nemo eveniet, a natus voluptatem quas accusamus accusantium voluptatibus. Natus fuga a deserunt assumenda, dolorum sint cum deleniti, numquam et repellendus porro cupiditate voluptates ut odit! Excepturi minima eum ullam vero aperiam, dolore explicabo, illo unde ut molestias enim ab itaque tempore esse aut quibusdam voluptate id possimus illum a repudiandae. Quod quae odit reprehenderit culpa eveniet, hic, reiciendis consequuntur perferendis quia nihil corrupti placeat nisi tenetur eum accusantium animi accusamus rerum ea ut laborum iste rem quisquam ipsum? Libero, tempora.</Text>
      </View>
    </Page>
  </Document>
);
export default MyDocument